import React from 'react'
    
import Heading from '../../components/headings/Heading';

function Login() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse m-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Heading level={"h1"} className={"mt-6"}>Log in</Heading>
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

        <div className="text-center lg:text-left mx-32">
          <img src="assets/woe.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login
