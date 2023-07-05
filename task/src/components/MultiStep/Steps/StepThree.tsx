import React, { useState } from "react";

interface UpdateFuncProps {
  handleChange: (stp: string, new_data: object) => void;
}
const StepThree: React.FC<UpdateFuncProps> = ({ handleChange }) => {
  const [data3, setData3] = useState({
    single_file: "",
  });
  const [error3, setError3] = useState(false);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files[0];
    setData3({ ...data3, single_file: selectedFile });
  };

  const handleNext = () => {
    handleChange("four", data3);
    setError3(true);
  };
  const handleBack = () => {
    handleChange("two", null);
    setError3(true);
  };

  return (
    <>
      <div className="text-center lg:text-left lg:ml-12">
        <h1 className="text-5xl font-bold">File Upload :3c</h1>
        <p className="py-6">
          You can upload files here. Only PNG and PDF formats are allowed.
          Please note that you can only upload one file. Thank you!
        </p>
        {error3 ? (
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
            <span>Error! (T^T) Please enter valid File </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-[-2em]">
        <div className="card-body">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Pick a file</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              accept=".png,.pdf"
              onChange={handleChangeFile}
            />
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
export default StepThree;
