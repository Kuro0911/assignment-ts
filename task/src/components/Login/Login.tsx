import React, { useState } from "react";
import { api_login } from "../../data/api";
import { useNavigate } from "react-router-dom";

import { Dispatch } from "redux";
import { addAuth } from "../../store/actionCreators";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
    setError(false);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };
  const saveAuth = React.useCallback(
    (authToken: AuthToken) => dispatch(addAuth(authToken)),
    [dispatch]
  );
  const handleLogin = () => {
    api_login(data)
      .then((res) => {
        saveAuth({ value: res.data });
        setTimeout(() => {
          navigate("/multi-step");
        }, 500);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  return (
    <div className="hero h-[50vh] bg-base-200 p-8 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:ml-12">
          <h1 className="text-5xl font-bold">Welcome to the Login Page!</h1>
          <p className="py-6">Please enter your credentials to log in.</p>
          {error ? (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! (T^T) Please enter correct email and password </span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 lg:mr-12">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                onChange={handleChangePassword}
              />
              <label className="label">
                <a
                  href="/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
