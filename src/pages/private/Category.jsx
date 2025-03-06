import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Axioscall from "../../services/Axioscall";
import {
  addCategoryApi,
  getCategoryApi,
  addSubCategoryApi,
  deleteCategoryApi,
} from "../../services/BaseUrl";
import { show_toast } from "../../utils/Toast";

const Category = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSubcategoryModal, setShowSubcategoryModal] = useState(false);
  const [form, setForm] = useState({ category: "" });
  const [subcategoryForm, setSubcategoryForm] = useState({
    subcategory: "",
    categoryId: "",
  });
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    setLoading(true);
    try {
      const response = await Axioscall("get", getCategoryApi, "", "header");
      if (response?.data) {
        setCategories(response.data);
      } else {
        show_toast("Failed to fetch categories!", false);
      }
    } catch (error) {
      console.error(error);
      show_toast("Error fetching categories!", false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Axioscall("post", addCategoryApi, form, "header");
      if (response?.data) {
        show_toast(response.data.message, true);
        setForm({ category: "" });
        setShowModal(false);
        getCategory();
      } else {
        show_toast("Failed to add category!", false);
      }
    } catch (error) {
      show_toast(
        error.response?.data?.message || "Something went wrong!",
        false
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAddSubcategory = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await Axioscall(
        "post",
        `${addSubCategoryApi}/${subcategoryForm.categoryId}`,
        { subcategory: subcategoryForm.subcategory },
        "header"
      );

      if (response?.data) {
        show_toast(response.data.message, true);
        setSubcategoryForm({ subcategory: "", categoryId: "" });
        setShowSubcategoryModal(false);
        getCategory(); // Refresh categories
      } else {
        show_toast("Failed to add subcategory!", false);
      }
    } catch (error) {
      show_toast(
        error.response?.data?.message || "Something went wrong!",
        false
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (categoryId) => {
    setLoading(true);
    try {
      const response = await Axioscall(
        "delete",
        `${deleteCategoryApi}/${categoryId}`,
        "",
        "header"
      );
      if (response?.data) {
        show_toast(response.data.message, true);
        getCategory();
      } else {
        show_toast("Failed to delete category!", false);
      }
    } catch (error) {
      show_toast(
        error.response?.data?.message || "Something went wrong!",
        false
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
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
                onClick={() => setShowModal(true)}
                className="btn btn-primary"
              >
                <i className="ti ti-plus f-18" /> Add Category
              </button>
            </div>
            <div className="card table-card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover tbl-product">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((cat, index) => (
                        <tr key={cat._id}>
                          <td>{index + 1}</td>
                          <td>{cat.category}</td>
                          <td>{cat.subcategories.join(", ") || "None"}</td>
                          <td>
                            <button
                              style={{ marginRight: "10px" }}
                              className="btn btn-success btn-sm"
                              onClick={() => {
                                setSubcategoryForm({
                                  ...subcategoryForm,
                                  categoryId: cat._id,
                                });
                                setShowSubcategoryModal(true);
                              }}
                            >
                              Add Sub Category
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteCategory(cat._id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                      {categories.length === 0 && (
                        <tr>
                          <td colSpan="4" className="text-center">
                            No categories found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Category Modal */}
        <Modal
          backdrop="static"
          show={showModal}
          centered
          onHide={() => {
            setShowModal(false);
            setForm({ category: "" });
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Add Category</h2>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setForm({ category: "" });
                }}
                className="btn-close"
                aria-label="close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    name="category"
                    className="form-control"
                    value={form.category}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        category: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => {
                    setShowModal(false);
                    setForm({ category: "" });
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </Modal>

        {/* Add Subcategory Modal */}
        <Modal
          backdrop="static"
          show={showSubcategoryModal}
          centered
          onHide={() => {
            setShowSubcategoryModal(false);
            setSubcategoryForm({ subcategory: "", categoryId: "" });
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Add Subcategory</h2>
              <button
                type="button"
                onClick={() => {
                  setShowSubcategoryModal(false);
                  setSubcategoryForm({ subcategory: "", categoryId: "" });
                }}
                className="btn-close"
                aria-label="close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddSubcategory}>
                <div className="mb-3">
                  <label className="form-label">Subcategory</label>
                  <input
                    type="text"
                    name="subcategory"
                    className="form-control"
                    value={subcategoryForm.subcategory}
                    onChange={(e) =>
                      setSubcategoryForm({
                        ...subcategoryForm,
                        subcategory: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => {
                    setShowSubcategoryModal(false);
                    setSubcategoryForm({ subcategory: "", categoryId: "" });
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Category;
