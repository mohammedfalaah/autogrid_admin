import React, { useState, useEffect } from "react";
import Axioscall from "../services/Axioscall";
import { addBannerApi } from "../services/BaseUrl";
import { Modal } from "react-bootstrap";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", images: "" });
  const [editMode, setEditMode] = useState(false); // To track if it's edit mode
  const [currentBannerId, setCurrentBannerId] = useState(null); // Store the ID of the banner being edited
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBanner = async () => {
    setLoading(true);
    try {
      const response = await Axioscall("get", addBannerApi);
      setBanners(response.data.banners);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", form.title);
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }

    try {
      const response = editMode
        ? await Axioscall("put", `${addBannerApi}/${currentBannerId}`, formData)
        : await Axioscall("post", addBannerApi, formData);

      if (editMode) {
        // Update the specific banner in the state
        setBanners((prevBanners) =>
          prevBanners.map((banner) =>
            banner._id === currentBannerId ? response.data : banner
          )
        );
      } else {
        setBanners((prevProducts) => [...prevProducts, response.data]);
      }

      setShowModal(false);
      setForm({ title: "", images: [] });
      setEditMode(false);
      setCurrentBannerId(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (banner) => {
    setForm({ title: banner.title, images: [] }); // Pre-fill the form
    setCurrentBannerId(banner._id);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await Axioscall("delete", `${addBannerApi}/${id}`);
      setBanners((prevBanners) => prevBanners.filter((banner) => banner._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="text-end p-sm-4 pb-sm-2" style={{ marginBottom: "10px" }}>
              <button onClick={() => setShowModal(true)} className="btn btn-primary">
                <i className="ti ti-plus f-18" /> Add Banner
              </button>
            </div>
            <div className="card table-card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover tbl-product">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {banners.map((banner, index) => (
                        <tr key={banner._id}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="row">
                              <div className="col-auto pe-0">
                                <img
                                  src={`https://node.autogridnumberplate.com${banner.images?.[0] || ""}`}
                                  alt={banner.title || "Banner Image"}
                                  className="wid-40 rounded"
                                />
                              </div>
                            </div>
                          </td>
                          <td>{banner?.title}</td>
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
                                  onClick={() => handleEdit(banner)}
                                >
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  onClick={() => handleDelete(banner._id)}
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {banners.length === 0 && (
                        <tr>
                          <td colSpan="4" className="text-center">
                            No banners available.
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
        <Modal
          backdrop="static"
          show={showModal}
          centered
          onHide={() => {
            setShowModal(false);
            setEditMode(false);
            setForm({ title: "", images: [] });
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{editMode ? "Edit Banner" : "Add Banner"}</h2>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditMode(false);
                  setForm({ title: "", images: [] });
                }}
                className="btn-close"
                aria-label="close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Images</label>
                  <input
                    type="file"
                    name="images"
                    className="form-control"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        images: Array.from(e.target.files),
                      })
                    }
                    multiple
                    required={!editMode} // Images are required only in add mode
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => {
                    setShowModal(false);
                    setEditMode(false);
                    setForm({ title: "", images: [] });
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

export default Banners;
