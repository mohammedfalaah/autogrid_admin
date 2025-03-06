import React, { useEffect, useState } from "react";
import Axioscall from "../../services/Axioscall";
import { getUsersApi, userDelete } from "../../services/BaseUrl";

const Users = () => {
  const [user, setUser] = useState([]);
  console.log(user, "==========");

  const getUsers = async () => {
    try {
      const response = await Axioscall("GET", getUsersApi, "", "header");
      setUser(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const response = await Axioscall(
        "DELETE",
        `${userDelete}/${userId}`,
        "",
        "header"
      );

      if (response?.status === 200) {
        // Check if delete was successful
        setUser((prevUsers) => prevUsers.filter((user) => user._id !== userId)); // Remove from state
      } else {
        console.error("Failed to delete user:", response);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card table-card">
              <div className="card-body">
                <h5 style={{ padding: "10px" }} className="card-title">
                  Users
                </h5>
                <div className="table-responsive">
                  <table className="table table-hover tbl-product">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>E-mail</th>
                        <th>Create Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.length > 0 ? (
                        user.map((user, index) => (
                          <tr key={user?._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.createdAt).toLocaleString()}</td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteUser(user._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="10" className="text-center">
                            No orders available.
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
      </div>
    </>
  );
};

export default Users;
