import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response = await axios.get("https://node.autogridnumberplate.com/api/getAllOrders", { headers });
            console.log("Orders Response:", response.data.orders);
            setOrders(response.data.orders); // Save orders data to state
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    const deleteOrder = async (orderId) => {
        if (!window.confirm("Are you sure you want to delete this order?")) return;

        try {
            const token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await axios.delete(`https://node.autogridnumberplate.com/api/deleteOrderAdmin/${orderId}`, { headers });

            setOrders(orders.filter(order => order._id !== orderId));
            getOrders();
            alert("Order deleted successfully");
        } catch (error) {
            console.error("Error deleting order:", error);
            alert("Failed to delete order");
        }
    };
    
    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card table-card">
                        <div className="card-body">
                            <h5 style={{ padding: '10px' }} className="card-title">Orders</h5>
                            <div className="table-responsive">
                            <table className="table table-hover tbl-product">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Total Amount</th>
                                            <th>Payment Status</th>
                                            <th>Created At</th>
                                            <th>Customer Details</th>
                                            <th>Vehicle Number</th>
                                            <th>Vehicle Model</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.length > 0 ? (
                                            orders.map((order, index) => (
                                                <tr key={order._id}>
                                                    <td>{index + 1}</td>
                                                    <td style={{whiteSpace:'normal'}}>
                                                        {order.products && order.products.length > 0
                                                            ? order.products.map((product) => 
                                                                product?.productId?.productName || "N/A"
                                                            ).join(", ")
                                                            : "N/A"}
                                                    </td>
                                                    <td>{order.totalAmount}</td>
                                                    <td>{order.paymentStatus}</td>
                                                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                                                    <td>
                                                        {order.address ? (
                                                            <>
                                                                <strong>{order.address.name}</strong> <br />
                                                                {order.address.email} <br />
                                                                {order.address.phone} <br />
                                                                {order.address.street}, {order.address.city}, <br />
                                                                {order.address.state} - {order.address.postalCode}
                                                            </>
                                                        ) : "N/A"}
                                                    </td>
                                                    <td>{order.vichleNumber}</td>
                                                    <td>{order?.vichleModel}</td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger btn-sm" 
                                                            onClick={() => deleteOrder(order.orderId)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="9" className="text-center">
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
    );
};

export default Orders;
