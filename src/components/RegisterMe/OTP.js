import React, { useState } from "react";
import "./OTP.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const OTP = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextClick = () => {
    if (selectedOption === "yes") {
      // Navigate to the PersonelDetails page
      navigate("/PersonelDetails");
    } else {
      // Handle the case when "No" option is selected
      // You can implement any logic you want here
    }
  };

  return (
    <div className="OTP1">
      <div className="OTP2">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          Do you want to proceed Without <br />
          OTP verification?{" "}
        </h1>
      </div>

      <div className="OTP3">
        <div className="OTP4">
          <label htmlFor="lang-yes">
            <input
              type="radio"
              id="lang-yes"
              name="verification"
              value="yes"
              checked={selectedOption === "yes"}
              onChange={handleOptionChange}
            />
            Yes
          </label>

          <label htmlFor="lang-no">
            <input
              type="radio"
              id="lang-no"
              name="verification"
              value="no"
              checked={selectedOption === "no"}
              onChange={handleOptionChange}
            />
            No, I want to complete OTP verification.
          </label>
        </div>
        <p>
          Proceed without OTP if you live in an area with low network
          connectivity.
        </p>
        <button className="button4" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default OTP;
