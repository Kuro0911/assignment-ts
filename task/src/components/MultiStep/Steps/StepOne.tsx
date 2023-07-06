import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface UpdateFuncProps {
  handleChange: (stp: string, new_data: object) => void;
}
const StepOne: React.FC<UpdateFuncProps> = ({ handleChange }) => {
  const [data1, setData1] = useState({
    email: "",
    name: "",
    phone_number: "",
  });
  const [phone, setPhone] = useState(0);
  const [error1, setError1] = useState(false);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData1({ ...data1, email: e.target.value });
  };
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError1(false);
    setData1({ ...data1, name: e.target.value });
  };
  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData1({ ...data1, phone_number: e.target.value });
  };
  const handleNext = () => {
    handleChange("two", data1);
    setError1(true);
  };
  return (
    <>
      <div className="text-center lg:text-left lg:ml-12">
        <h1 className="text-5xl font-bold">Enter Basic Details!</h1>
        <p className="py-6">
          Please provide your email address, phone number, and username for
          completing your basic details. :3
        </p>
        {error1 ? (
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
            <span>Error! (T^T) Please enter valid details </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              onChange={handleChangeUsername}
              value={data1.name}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              onChange={handleChangeEmail}
              value={data1.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <PhoneInput
              international
              defaultCountry="IN"
              countrySelectProps={{ unicodeFlags: true }}
              value={phone}
              onChange={setPhone}
              className="input input-bordered"
            />
            {/* <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered"
              onChange={handleChangePhoneNumber}
              value={data1.phone_number}
            /> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepOne;
