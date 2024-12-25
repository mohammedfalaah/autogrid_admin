import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useContext } from "react";
import { contextData } from "../../services/Context";
import { show_toast } from "../../utils/Toast";
import { jwtDecode } from "jwt-decode";
import { loginApi } from "../../services/BaseUrl";
import Axioscall from "../../services/Axioscall";

const Login = () => {
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const { setUser } = useContext(contextData);

  const setvaluehandler = (event) => {
    const { name, value } = event.target;
    setformdata((prevState) => ({ ...prevState, [name]: value }));
  };

  const loginHandler = async () => {
    try {
      const response = await Axioscall("post",loginApi,formdata);
      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        setUser(jwtDecode(data.token));
        show_toast("Logged in Successfully", true);
        window.location.href = "/";
      } else {
        show_toast("Invalid username or password", false);
      }
    } catch (error) {
      console.error("Login error", error);
      show_toast("An error occurred during login", false);
    }
  };

  return (
    <div className="centered-container" >
      <div className="card centered-card">
        <div className="card-header text-center ">

        <img style={{width:'100px',height:'25px'}}  src="/assets/images/AGI.png" alt="logo image" className="logo-lg" />

        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
          className="form-horizontal"
        >
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
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
              <label htmlFor="password">
                Password <span className="text-danger">*</span>
              </label>
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
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
