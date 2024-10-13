import React, { useState } from "react";
import Heading from '../../components/headings/Heading';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axiosInstance from "../../api/axiosConfig";
import { useAuth } from "../../helpers/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  useEffect(() => {
      if (isAuthenticated) 
          navigate('/');
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
      };
      
      try {
          const response = await axiosInstance.post('/auth/login', data);
          if (response.data.success) {
              localStorage.setItem('token', response.data.token);
              navigate('/'); 
              setIsAuthenticated(true);
          }

      } catch (error) {
          setMessage(`Error: ${error.response.data.message}`);
      }
  };


  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse m-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Heading level={"h1"} className={"mt-6"}>Log in</Heading>

          {message && (
            <div className="alert-section mt-10 mx-10" >
            <div role="alert" className={`alert alert-${(success) ? "success" : "error"} `}>
            <span>{message}</span>
            </div>
            </div>
          )}

          <form className="card-body pb-0" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="form-control mx-auto">
              <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot Password?
                  </a>
                </label>
            </div>

            <div className="form-control  ">
              <button className="btn btn-primary text-white">Login</button>
            </div>
            
          </form>

          <div className="form card-body pt-3">
          <button className="hover:text-white hover:bg-secondary btn btn-primary bg-white text-primary">Login with Google</button>
          </div>
        </div>

        <div className="hidden text-center lg:flex mx-32">
          <img src="assets/woe.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login
