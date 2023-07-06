import React, { useState } from "react";
import { stepTwoSchema } from "../validationSchemas/stepTwoSchema";

interface UpdateFuncProps {
  handleChange: (stp: string, new_data: object) => void;
}
const StepTwo: React.FC<UpdateFuncProps> = ({ handleChange }) => {
  const [data2, setData2] = useState({
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    pincode: 0,
    country: "",
  });
  const [error2, setError2] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChangeAddressL1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData2({ ...data2, address_1: e.target.value });
  };
  const handleChangeAddressL2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError2(false);
    setErrors([]);
    setData2({ ...data2, address_2: e.target.value });
  };
  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError2(false);
    setErrors([]);
    setData2({ ...data2, city: e.target.value });
  };
  const handleChangeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError2(false);
    setErrors([]);
    setData2({ ...data2, state: e.target.value });
  };
  const handleChangePincode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError2(false);
    setErrors([]);
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setData2({ ...data2, pincode: value });
  };
  const handleChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError2(false);
    setErrors([]);
    setData2({ ...data2, country: e.target.value });
  };
  const handleNext = () => {
    const validationResult = stepTwoSchema.safeParse(data2);
    if (validationResult.success) {
      handleChange("three", data2);
    } else {
      const validationErrors = validationResult.error.errors.map(
        (error) => error.message
      );
      setErrors(validationErrors);
      setError2(true);
    }
  };
  const handleBack = () => {
    handleChange("one", null);
    setError2(false);
  };

  return (
    <>
      <div className="text-center lg:text-left lg:ml-12">
        <h1 className="text-5xl font-bold">Enter Your Address!</h1>
        <p className="py-6">
          Please provide your address in the standard format. Include address
          line one, address line two, city, state, pincode, and country,
          separated by commas. Thank you!
        </p>
        {error2 ? (
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
              <span className="label-text">Address Line 1</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered"
              value={data2.address_1}
              onChange={handleChangeAddressL1}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address Line 2</span>
            </label>
            <input
              type="text"
              placeholder="Address Line 2"
              className="input input-bordered"
              onChange={handleChangeAddressL2}
              value={data2.address_2}
            />
          </div>
          <div className="flex">
            <div className="form-control w-1/2 mr-2">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="City"
                className="input input-bordered"
                onChange={handleChangeCity}
                value={data2.city}
              />
            </div>
            <div className="form-control w-1/2 ml-2">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <input
                type="text"
                placeholder="State"
                className="input input-bordered"
                onChange={handleChangeState}
                value={data2.state}
              />
            </div>
          </div>
          <div className="flex">
            <div className="form-control w-1/2 mr-2">
              <label className="label">
                <span className="label-text">Pincode</span>
              </label>
              <input
                type="number"
                placeholder="Pincode"
                className="input input-bordered"
                onChange={handleChangePincode}
                value={data2.pincode}
              />
            </div>
            <div className="form-control w-1/2 ml-2">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <input
                type="text"
                placeholder="Country"
                className="input input-bordered"
                onChange={handleChangeCountry}
                value={data2.country}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <div className="flex w-full">
              <button
                className="btn btn-primary m-2 w-1/2"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="btn btn-primary m-2 w-1/2"
                onClick={handleNext}
                disabled={error2}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo;
