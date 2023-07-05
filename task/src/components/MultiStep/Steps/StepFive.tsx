import React, { useState } from "react";

interface UpdateFuncProps {
  handleChange: (stp: string, new_data: object) => void;
}
const StepFive: React.FC<UpdateFuncProps> = ({ handleChange }) => {
  const handleBack = () => {
    handleChange("four", null);
  };
  const handleNext = () => {
    setSuccess(true);
    // handleChange("submit", null);
  };
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className="text-center lg:text-left lg:ml-12">
        <h1 className="text-5xl font-bold">Status!! :3c</h1>
        <p className="py-6">
          Please take a moment to check your current status. Your progress and
          updates are important. Stay informed about your status for the latest
          information and updates regarding your situation. Thank you!
        </p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-[-2em]">
        <div className="card-body">
          {success ? (
            <div className="alert alert-success">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your Form Has Been Submitted !!!</span>
            </div>
          ) : (
            <div class="max-w-md">
              <p class="mb-5 text-3xl font-bold">
                Would you like to submit your information?
              </p>
            </div>
          )}
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
                Submit?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepFive;
