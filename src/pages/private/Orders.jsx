import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { show_toast } from '../../utils/Toast';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const response = await axios.get("https://node.autogridnumberplate.com/api/getAllOrders", { headers });
            console.log(response,"============");
            
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
            await axios.delete(`https://node.autogridnumberplate.com/api/deleteOrderAdmin/${orderId}`, { headers });
            setOrders(orders.filter(order => order._id !== orderId));
            show_toast("Order deleted successfully",true);
            getOrders();
        } catch (error) {
            console.error("Error deleting order:", error);
            show_toast("Failed to delete order",false);
        }
    };
    
    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="container mt-4">
             <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Orders</li>
                </ol>
            </nav>
            {orders.map((order) => (
                <div key={order._id} className="card mb-3 p-3 shadow-sm">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>ORDER#: {order.orderId}</h6>
                        <span>PLACED ON: {new Date(order.createdAt).toLocaleDateString()}</span>
                        <h6>TOTAL AMOUNT: ₹{order.totalAmount}</h6>
                        <span className="badge bg-success">{order.status}</span>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteOrder(order.orderId)}>🗑</button>
                    </div>
                    <div className="row mt-3">
                        {order.products.map((item) => (
                            <div key={item._id} className="col-md-6">
                                <div className="card p-2 d-flex flex-row align-items-center">
                                    <img src={`https://node.autogridnumberplate.com${item.productId.photographs[0]}`} alt={item.productId.productName} className="img-thumbnail" style={{ width: '80px', height: '80px' }} />
                                    <div className="ms-3">
                                        <h6>{item.productId.productName}</h6>
                                        <p>Amount: ₹{item.productId.currentPrice}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Vehicle Number: {item.vehicleNumber}</p>
                                        <p>Vehicle Model: {item.vehicleModel}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3">
                        <h6>Delivery Address:</h6>
                        <p>{order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                    </div>
                    {/* <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-outline-primary">🖨 Print Invoice</button>
                    </div> */}
                    
                </div>
            ))}
        </div>
    );
};

export default Orders;
