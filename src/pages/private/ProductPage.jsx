import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { show_toast } from "../../utils/Toast";
import { Pagination } from "react-bootstrap";
import {
  addProductsApi,
  getCategoryApi,
  productDeleteApi,
  productListApi,
  updateProductApi,
} from "../../services/BaseUrl";
import Axioscall from "../../services/Axioscall";

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [modalState, setModalState] = useState({
    show: false,
    mode: "add", 
    productId: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    productId: null,
  });
  const [form, setForm] = useState({
    productName: "",
    specifications: "",
    originalPrice: "",
    currentPrice: "",
    photographs: "",
    category: "",
    subcategory: "",
  });
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const getCategory = async () => {
    setLoading(true);
    try {
      const response = await Axioscall('get', getCategoryApi, '', 'header');
      console.log(response,"catogories and sub categories");
      
      if (response?.data) {
        setCategories(response.data);
      } else {
        show_toast('Failed to fetch categories!', false);
      }
    } catch (error) {
      console.error(error);
      show_toast('Error fetching categories!', false);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await Axioscall("delete", `${productDeleteApi}/${deleteModal.productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== deleteModal.productId)
      );
      setDeleteModal({ show: false, productId: null });
      show_toast("Successfully deleted", true);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      const response = await Axioscall("get", `${productListApi}?page=${page}`);
      console.log("responseresponse", response);

      setProducts(response.data.products);
      setCurrentPage(response.data.pagination.currentPage);
      setTotalPages(response.data.pagination.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setForm({ ...form, category: selectedCategory, subcategory: "" });

    const foundCategory = categories.find(cat => cat.category === selectedCategory);
    setSubcategories(foundCategory ? foundCategory.subcategories : []);
  };

  const handleSubcategoryChange = (e) => {
    setForm({ ...form, subcategory: e.target.value });
  };

  const openModal = (mode, product = null) => {
    if (mode === "edit" && product) {
      setForm({
        productName: product.productName,
        specifications: product.specifications.join(", "), 
        originalPrice: product.originalPrice,
        currentPrice: product.currentPrice,
        category: product.category,
        subcategory: product.subcategory,
        photographs: [],
      });
      setModalState({ show: true, mode, productId: product._id });
    } else {
      setForm({
        productName: "",
        specifications: "",
        originalPrice: "",
        currentPrice: "",
        category: "",
        subcategory:"",
        photographs: [],
      });
      setModalState({ show: true, mode });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("productName", form.productName);
    formData.append(
      "specifications",
      form.specifications.split(",").map((spec) => spec.trim())
    );
    formData.append("originalPrice", form.originalPrice);
    formData.append("currentPrice", form.currentPrice);
    formData.append("category", form.category);
    formData.append("subcategory",form.subcategory);
    for (let i = 0; i < form.photographs.length; i++) {
      formData.append("photographs", form.photographs[i]);
    }

    try {
      if (modalState.mode === "add") {
        await Axioscall("post", addProductsApi, formData, "header");
        show_toast("Product added successfully", true);
      } else if (modalState.mode === "edit") {
        await Axioscall(
          "put",
          `${updateProductApi}/${modalState.productId}`,
          formData,
          "header"
        );
        show_toast("Product updated successfully", true);
      }
      setModalState({ show: false, mode: "add", productId: null });
      fetchProducts();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getCategory();
  }, [])
  

  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div
              style={{ marginBottom: "10px" }}
              className="text-end p-sm-4 pb-sm-2"
            >
              <button
                onClick={() => openModal("add")}
                className="btn btn-primary"
              >
                <i className="ti ti-plus f-18" /> Add Product
              </button>
            </div>
            <div className="card table-card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover tbl-product">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product Detail</th>
                        <th>Specifications</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Original Price</th>
                        <th>Current Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={product._id}>
                          <td className="text-end">{index + 1}</td>
                          <td>
                            <div className="row">
                              <div className="col-auto pe-0">
                                <img
                                  src={`https://node.autogridnumberplate.com${
                                    product.photographs?.[0] || ""
                                  }`}
                                  alt={product.productName}
                                  className="wid-40 rounded"
                                />
                              </div>
                              <div className="col">
                                <h6 className="mb-1">{product.productName}</h6>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{
                              width: "200px",
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                            }}
                          >
                            {product.specifications?.join(", ") || "N/A"}
                          </td>{" "}
                          <td>{product.category}</td>
                          <td>{product.subcategory}</td>
                          <td className="text-center">₹{product.originalPrice}</td>
                          <td className="text-center">₹{product.currentPrice}</td>
                          <td>
                            <div className="dropdown">
                              <a
                                className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical f-18" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  onClick={() => openModal("edit", product)}
                                >
                                  Edit
                                </a>

                                <a
                                  className="dropdown-item"
                                  onClick={() =>
                                    setDeleteModal({
                                      show: true,
                                      productId: product._id,
                                    })
                                  }
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 
                  <Pagination className="justify-content-end mt-3" style={{marginRight:'10px'}}>
                    <Pagination.Prev
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Pagination.Prev>
                    {[...Array(totalPages).keys()].map((page) => (
                      <Pagination.Item
                        key={page + 1}
                        active={currentPage === page + 1}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Pagination.Next>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={deleteModal.show}
        onHide={() => setDeleteModal({ show: false, productId: null })}
        centered
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button
              type="button"
              onClick={() => setDeleteModal({ show: false, productId: null })}
              className="btn-close"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this product?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setDeleteModal({ show: false, productId: null })}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        backdrop="static"
        show={modalState.show}
        centered
        onHide={() => setModalState({ show: false, mode: "add", productId: null })}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {modalState.mode === "add" ? "Add Product" : "Edit Product"}
            </h5>
            <button
              type="button"
              onClick={() =>
                setModalState({ show: false, mode: "add", productId: null })
              }
              className="btn-close"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.productName}
                  onChange={(e) =>
                    setForm({ ...form, productName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-control"
          value={form.category}
          onChange={handleCategoryChange}
        >
          <option value="" disabled>Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Subcategory</label>
        <select
          className="form-control"
          value={form.subcategory}
          onChange={handleSubcategoryChange}
          // disabled={!subcategories.length}
        >
          <option value="" disabled>
            {subcategories.length ? "Select Subcategory" : "No Subcategories Available"}
          </option>
          {subcategories.map((subcat, index) => (
            <option key={index} value={subcat}>
              {subcat}
            </option>
          ))}
        </select>
      </div>
              <div className="mb-3">
                <label className="form-label">Specifications</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.specifications}
                  onChange={(e) =>
                    setForm({ ...form, specifications: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Photographs</label>
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={(e) =>
                    setForm({
                      ...form,
                      photographs: Array.from(e.target.files),
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Original Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.originalPrice}
                  onChange={(e) =>
                    setForm({ ...form, originalPrice: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Current Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.currentPrice}
                  onChange={(e) =>
                    setForm({ ...form, currentPrice: e.target.value })
                  }
                  required
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() =>
                    setModalState({ show: false, mode: "add", productId: null })
                  }
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      Saving...
                    </>
                  ) : modalState.mode === "add" ? (
                    "Add Product"
                  ) : (
                    "Update Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductPage;
