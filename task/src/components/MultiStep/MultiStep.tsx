import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StepFive from "./Steps/StepFive";

export const MultiStep = () => {
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
    geolocation: "",
    single_file: "",
    multi_ups1: "",
    multi_ups2: "",
    multi_ups3: "",
  });
  const handleChange = (stp: string, new_data: object) => {
    if (new_data === null) {
      if (stp === "submit") {
        return "OK";
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
    console.log(steps);
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
