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

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card table-card">
                        <div className="card-body">
                            <h5 style={{padding:'10px'}} className="card-title">Orders</h5>
                            <div className="table-responsive">
                                <table className="table table-hover tbl-product">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Order ID</th>
                                            <th>Total Amount</th>
                                            <th>Payment Status</th>
                                            <th>Status</th>
                                            <th>Created At</th>
                                            <th>Customer Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.length > 0 ? (
                                            orders.map((order, index) => (
                                                <tr key={order._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.totalAmount}</td>
                                                    <td>{order.paymentStatus}</td>
                                                    <td>{order.status}</td>
                                                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                                                    <td>{order.address?.name}</td>
                                                    <td>{order.address?.email}</td>
                                                    <td>{order.address?.phone}</td>
                                                    <td>{order.address?.city}</td>
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
    );
};

export default Orders;
