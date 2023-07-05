import React from "react";

export const ForgotPass = () => {
  return (
    <div className="hero h-[60vh] p-8 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-12">
          <h1 className="text-5xl font-bold">Forgot password?</h1>
          <p className="py-6">
            Enter the email address associated with yout account
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mr-12">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <a href="/login">
                <button className="btn btn-primary">Send email</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
