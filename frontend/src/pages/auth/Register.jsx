import React from "react";
import Heading from "../../components/headings/Heading";

function Register() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse m-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Heading level={"h1"} className={"mt-6"}>Sign Up</Heading>
          <form className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="confirm password" className="input input-bordered" required />
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
          <button className="hover:text-white hover:bg-secondary btn btn-primary bg-white text-primary">Continue with Google</button>
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
