import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StepFive from "./Steps/StepFive";
import { useNavigate } from "react-router-dom";
import { api_put_form } from "../../data/api";

export const MultiStep = () => {
  const navigate = useNavigate();
  const authToken: AuthToken = useSelector(
    (state: AuthState) => state.authToken
  );

  useEffect(() => {
    if (authToken === "invalid") {
      navigate("/login");
    }
  }, [authToken, navigate]);

  const [currStep, setCurrStep] = useState("one");
  const [steps, setSteps] = useState({
    one: {
      active: true,
      title: "Basic Deatails",
      component: StepOne,
    },
    two: {
      active: false,
      title: "Address",
      component: StepTwo,
    },
    three: {
      active: false,
      title: "File Upload",
      component: StepThree,
    },
    four: {
      active: false,
      title: "Multi File Upload",
      component: StepFour,
    },
    five: { active: false, title: "Status", component: StepFive },
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    pincode: 0,
    country: "",
    geolocation: "string",
    single_file: null,
    multi_ups1: null,
    multi_ups2: null,
    multi_ups3: null,
  });
  const handleChange = async (stp: string, new_data: object) => {
    if (new_data === null) {
      if (stp === "submit") {
        const auth = authToken;
        return api_put_form(data, auth)
          .then((res) => {
            console.log("Response:", res.data);
            return "OK";
          })
          .catch((err) => {
            console.log(err);
            return "ERR";
          });
      }
      const new_steps = steps;
      new_steps[currStep].active = false;
      setSteps(new_steps);
      setCurrStep(stp);
      return;
    }
    setCurrStep(stp);
    const new_steps = steps;
    new_steps[stp].active = true;
    setSteps(new_steps);
    setData({
      ...data,
      ...new_data,
    });
  };
  return (
    <div className="p-8 rounded-lg">
      <div className="hero-content flex-col">
        <ul className="steps mb-14">
          {Object.keys(steps).map((key) => {
            const item = steps[key];
            return (
              <li
                className={`step ${item.active ? "step-primary" : ""}`}
                key={key}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <React.Fragment>
          {Object.keys(steps).map((key) => {
            const item = steps[key];
            return (
              <div
                key={key}
                className={`${
                  key != currStep ? "hidden" : ""
                } hero-content flex-col lg:flex-row-reverse`}
              >
                {item.component({ handleChange: handleChange })}
              </div>
            );
          })}
        </React.Fragment>
      </div>
    </div>
  );
};
