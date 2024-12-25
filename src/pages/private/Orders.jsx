import axios from 'axios';
import React, { useEffect } from 'react'

const Orders = () => {


    const getOrders = async () => {
        try {
            // Get the token from localStorage
            const token = localStorage.getItem("token"); // Replace 'your_token_key' with the actual key used to store the token
    
            // Set up headers with the token
            const headers = {
                Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
            };
    
            // Make the API request with headers
            const response = await axios.get("https://aginode.vercel.app/api/getAllorders", { headers });
    
            console.log("=====", response);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    useEffect(() => {
        getOrders();
    }, [])
    
  return (
    <div>
    
      
    </div>
  )
}

export default Orders
