import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { show_toast } from "../../utils/Toast";
import {
  addProductsApi,
  productDeleteApi,
  productListApi,
  updateProductApi,
} from "../../services/BaseUrl";
import Axioscall from "../../services/Axioscall";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [editModal, setEditModal] = useState([]);
  const [productModal, setProductModal] = useState({
    show: false,
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
  });

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

  const fetchProducts = async () => {
    try {
      const response = await Axioscall("get", productListApi);

      console.log("responseresponse", response);

      setProducts(response.data.products);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", form.productName);
    formData.append(
      "specifications",
      form.specifications.split(",").map((spec) => spec.trim())
    );
    formData.append("originalPrice", form.originalPrice);
    formData.append("currentPrice", form.currentPrice);
    formData.append("category", form.category);
    for (let i = 0; i < form.photographs.length; i++) {
      formData.append("photographs", form.photographs[i]);
    }

    try {
      await Axioscall(
        "put",
        `${updateProductApi}/${editModal.productId}`,
        formData,
        "header"
      );
      show_toast("Product updated successfully", true);
      setEditModal({ show: false, productId: null });
      fetchProducts(); // Refresh the product list
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update product");
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", form.productName);
    formData.append(
      "specifications",
      form.specifications.split(",").map((spec) => spec.trim())
    );
    formData.append("originalPrice", form.originalPrice);
    formData.append("currentPrice", form.currentPrice);
    formData.append("category", form.category);
    for (let i = 0; i < form.photographs.length; i++) {
      formData.append("photographs", form.photographs[i]);
    }

    try {
      const response = await Axioscall(
        "post",
        addProductsApi,
        formData,
        "header"
      );

      const newProduct = response.data;
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setProductModal({ show: false });

      setForm({
        productName: "",
        specifications: "",
        originalPrice: "",
        currentPrice: "",
        category: "",
        photographs: [],
      });
      fetchProducts();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
                onClick={() => setProductModal({ show: true })}
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
                                  src={product.photographs?.[0] || ""}
                                  alt={product.productName}
                                  className="wid-40 rounded"
                                />
                              </div>
                              <div className="col">
                                <h6 className="mb-1">{product.productName}</h6>
                              </div>
                            </div>
                          </td>
                          <td>{product.specifications?.join(", ") || "N/A"}</td>
                          <td className="text-end">₹{product.originalPrice}</td>
                          <td className="text-end">₹{product.currentPrice}</td>
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
                                  onClick={() =>
                                    setEditModal({
                                      show: true,
                                      productId: product._id,
                                    })
                                  }
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
        show={productModal.show}
        centered
        onHide={() => setProductModal({ show: false })}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Product</h5>
            <button
              type="button"
              onClick={() => setProductModal({ show: false })}
              className="btn-close"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={addProduct}>
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
                <input
                  type="text"
                  className="form-control"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                />
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
              <div
                style={{ marginTop: "10px" }}
                className="d-flex  justify-content-end gap-2"
              >
                <button
                  style={{ marginRight: "5px" }}
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setProductModal({ show: false })}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <Modal
        backdrop="static"
        show={editModal.show}
        centered
        onHide={() => setEditModal({ show: false, productId: null })}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button
              type="button"
              onClick={() => setEditModal({ show: false, productId: null })}
              className="btn-close"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={updateProduct}>
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
                <input
                  type="text"
                  className="form-control"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                />
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
                  onClick={() => setEditModal({ show: false, productId: null })}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
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
