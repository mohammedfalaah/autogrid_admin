import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [productModal, setProductModal] = useState({
    show: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    productName: "",
    specifications: "",
    originalPrice: "",
    currentPrice: "",
    photographs:"",
    category:"",
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://aginode.vercel.app/api/getAllproducts");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://aginode.vercel.app/api/addproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: form.productName,
          specifications: form.specifications.split(",").map((spec) => spec.trim()),
          originalPrice: parseFloat(form.originalPrice),
          currentPrice: parseFloat(form.currentPrice),
          category: parseFloat(form.category),
          photographs: parseFloat(form.photographs),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const newProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setProductModal({ show: false });
      setForm({
        productName: "",
        specifications: "",
        originalPrice: "",
        currentPrice: "",
        category:"",
        photographs:"",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card table-card">
              <div className="card-body">
                <div className="text-end p-sm-4 pb-sm-2">
                  <button
                    onClick={() => setProductModal({ show: true })}
                    className="btn btn-primary"
                  >
                    <i className="ti ti-plus f-18" /> Add Product
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover tbl-product">
                    <thead>
                      <tr>
                        <th className="text-end">#</th>
                        <th>Product Detail</th>
                        <th>Specifications</th>
                        <th className="text-end">Original Price</th>
                        <th className="text-end">Current Price</th>
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
                          <td>
                            {product.specifications?.join(", ") || "N/A"}
                          </td>
                          <td className="text-end">${product.originalPrice}</td>
                          <td className="text-end">${product.currentPrice}</td>
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
    </>
  );
};

export default ProductPage;
