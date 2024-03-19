import React, { useState } from "react";
import "./Whereareyoufrom.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import indianStates from "../Api/StateApi";

const Whereareyoufrom = ({ selectedState }) => {
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState("SelectDistrict");

  const handleNextClick = () => {
    // Pass selected state as a query parameter while navigating
    navigate(`/District?state=${(selectedState)}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDistrict(selectedValue);
    // You can add any additional logic here if needed
  };

  return (
    <div className="from1">
      <div className="from2">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          Where are you from?
        </h1>
      </div>

      <div className="from3">
        <div className="from4">
          <select
            className="register-select"
            value={selectedState}
            onChange={handleSelectChange}
          >
            <option value="SelectState">Select State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state.english}>
                {state.english} ({state.native})
              </option>
            ))}
          </select>
          <select
            className="register-select"
            value={selectedDistrict}
            onChange={handleNextClick}
          >
            <option value="SelectDistrict">Select District</option>

            <option value="District1">District</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Whereareyoufrom;
