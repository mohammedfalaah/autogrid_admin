import axios from "axios";
import React, { useEffect, useState } from "react";
import { show_toast } from "../../utils/Toast";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(
        "https://node.autogridnumberplate.com/api/getAllOrders",
        { headers }
      );
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const deleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      await axios.delete(
        `https://node.autogridnumberplate.com/api/deleteOrderAdmin/${orderId}`,
        { headers }
      );
      setOrders(orders.filter((order) => order._id !== orderId));
      show_toast("Order deleted successfully", true);
      getOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
      show_toast("Failed to delete order", false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Orders
          </li>
        </ol>
      </nav>

      {orders.map((order) => (
        <div key={order._id} className="card mb-4 p-3 shadow-sm">
          <div className="row align-items-center">
            <div className="col-md-3 col-12 text-center text-md-start">
              <h6 className="mb-1">ORDER#: {order.orderId}</h6>
              <span className="text-muted small">
                Placed on: {new Date(order.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="col-md-3 col-12 text-center text-md-start">
              <h6>TOTAL AMOUNT: ₹{order.totalAmount}</h6>
            </div>
            <div className="col-md-3 col-12 text-center text-md-start">
              <span
                className={`badge bg-${
                  order.status === "Delivered" ? "success" : "warning"
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="col-md-3 col-12 text-center text-md-end mt-2 mt-md-0">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteOrder(order.orderId)}
              >
                🗑 Delete
              </button>
            </div>
          </div>

          <hr />

          <div className="row">
            {order.products.map((item) => (
              <div key={item._id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="card p-2 d-flex flex-row align-items-center">
                  <img
                    src={`https://node.autogridnumberplate.com${item.productId.photographs[0]}`}
                    alt={item.productId.productName}
                    className="img-thumbnail img-fluid"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-1">{item.productId.productName}</h6>
                    <p className="mb-1 text-muted ">
                      Amount: ₹{item.productId.currentPrice}
                    </p>
                    <p className="mb-1 text-muted ">
                      Quantity: {item.quantity}
                    </p>
                    {item.productId.category !== "ACCESSORIES" && (
                      <>
                        <p className="mb-1 text-muted ">
                          Vehicle: {item.vehicleNumber}
                        </p>
                        <p className="mb-1 text-muted ">
                          Model: {item.vehicleModel}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />

          <div className="row">
            <div className="col-12">
              <h6>Delivery Address:</h6>
              <p className="text-muted">
                Name : {order.address.name} <br />
                Street: {order.address.street} <br /> City: {order.address.city}{" "}
                <br /> Country: {order.address.state} <br /> Email :{" "}
                {order?.address?.email} <br /> Pin code :{" "}
                {order.address.postalCode} <br /> Phone number :{" "}
                {order?.address?.phone}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
