import React, { useState } from "react";
import Heading from "../../components/headings/Heading";

import axiosInstance from "../../api/axiosConfig";

import Alert from "../../components/alerts/Alert";

function Register() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [redirectTime, setRedirectTime] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    try {
      const res = await axiosInstance.post("/auth", data);
      setMessage(res.data.message);
      setSuccess(true);

      if (res.status === 200) {
        e.target.reset();
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
    } catch (e) {
      setMessage(e.response.data.message);
      setSuccess(false);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse m-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Heading level={"h1"} className={"mt-6"}>
            Sign Up
          </Heading>

          {message && <Alert type={success ? "success" : "error"} className="mt-5 mx-auto w-3/4" message={message} />}
          
          <form className="card-body pb-0" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required name="email" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required name="password" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="confirm password" className="input input-bordered" required name="confirmPassword" />
            </div>

            <div className="form-control mx-auto">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Already has an account? Login
                </a>
              </label>
            </div>

            <div className="form-control  ">
              <button className="btn btn-primary text-white">Sign Up</button>
            </div>
          </form>

          <div className="form card-body pt-3">
            <button className="hover:text-white hover:bg-secondary btn btn-primary bg-white text-primary" onSubmit={handleSubmit}>
              Continue with Google
            </button>
          </div>
        </div>

        <div className="text-center hidden lg:flex mx-32">
          <img src="assets/woe.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
