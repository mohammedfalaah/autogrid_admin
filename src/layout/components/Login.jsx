import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { basePath, dashboardPath } from '../../utils/Constants';
import { Form } from 'react-bootstrap';
import { loginApi } from '../../services/BaseUrl';
import { contextData } from '../../services/Context';
import { useContext } from "react";
import {jwtDecode} from "jwt-decode";
const Login = () => {
    const [formdata, setformdata] = useState({ email: "", password: "" });
    const { setUser, user } = useContext(contextData);

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     if (validate()) {
    //         const loginData = {
    //             email: username,
    //             password: password,
    //         };
    //         try {
    //             const response = await fetch("", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/x-www-form-urlencoded",
    //                 },
    //                 body: new URLSearchParams(loginData),
    //             });
    
    //             if (response.ok) {
    //                 const resp = await response.json();
    //                 console.log(resp);
    
    //                 if (resp.success) {
    //                     localStorage.setItem("token", resp.token);
    //                     window.location.href = basePath;
    //                     alert("Login successful!");
    //                 } else {
    //                     alert("Login failed: " + resp.message);
    //                 }
    //             } else {
    //                 console.error("HTTP error:", response.status);
    //                 alert("Login failed due to server error.");
    //             }
    //         } catch (error) {
    //             console.error("Fetch error:", error);
    //             alert("Login failed due to: " + error.message);
    //         }
    //     }
    // };
    
    const setvaluehandler = (event) => {
      const { name, value } = event.target;
      setformdata((prevState) => ({ ...prevState, [name]: value }));
    };
    
      const loginHandler = async () => {

        try {

          const response = await fetch(loginApi, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
          });
       
          const data = await response.json();
          console.log(data,"responseresponseresponseresponseresponse")
          console.log(data.token, "datadata");
          if (response.status === 200) {
            localStorage.setItem("token", data.token);
            setUser(jwtDecode(data?.token));
         
            // window.localStorage.setItem("token",data.token);
            alert("success login")
            window.location.href = basePath;
          } else {
            Show_Toast("Invalid username or password", false);
          }
        } catch (error) {
          console.error("Login error", error);
        } 
      };
      

  return (
    <div className="row  justify-content-center">
      <div className="col-lg-6">
        <Form 
        onSubmit={(e)=>{e.preventDefault(); loginHandler();}}
        // onSubmit={handleLogin}
         className="form-horizontal">
          <div className="card">
            <div className="card-header text-center">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group mb-3">
                <label htmlFor="username">Email <span className="text-danger">*</span></label>
                <input
                  type="text"
                  value={formdata.email}
                  onChange={setvaluehandler}
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password <span className="text-danger">*</span></label>
                <input
                value={formdata.password}
                onChange={setvaluehandler}
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              {/* <Link className="btn btn-success" to={registerPath}>
                New User? Register
              </Link> */}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
