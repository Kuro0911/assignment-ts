import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { stepOneSchema } from "../validationSchemas/stepOneSchema";

interface UpdateFuncProps {
  handleChange: (stp: string, new_data: object) => void;
}
const StepOne: React.FC<UpdateFuncProps> = ({ handleChange }) => {
  const [data1, setData1] = useState({
    email: "",
    name: "",
    phone_number: "",
  });
  const [phone, setPhone] = useState("");
  const [error1, setError1] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError1(false);
    setErrors([]);
    setData1({ ...data1, email: e.target.value });
  };
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError1(false);
    setErrors([]);
    setData1({ ...data1, name: e.target.value });
  };
  const handleNext = () => {
    const validationResult = stepOneSchema.safeParse({
      ...data1,
      phone_number: phone,
    });
    if (validationResult.success) {
      handleChange("two", { ...data1, phone_number: phone });
    } else {
      const validationErrors = validationResult.error.errors.map(
        (error) => error.message
      );
      setErrors(validationErrors);
      setError1(true);
    }
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
            <span>
              Error! (T^T) Please enter valid details. You have the following
              errors
              <div className="flex flex-col mt-2">
                {errors.map((e, idx) => (
                  <span className="italic" key={idx}>
                    &#x2022; {e}
                  </span>
                ))}
              </div>
            </span>
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
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={error1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepOne;
