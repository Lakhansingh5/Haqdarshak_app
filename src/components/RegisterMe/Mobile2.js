import React, { useState } from "react";
import "./Mobile2.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Mobile2 = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleNextClick = () => {
    // Navigate to the OTP page
    navigate("/OTP");
  };

  return (
    <div className="MobileT1">
      <div className="MobileT2">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          What is your mobile number?
        </h1>
      </div>

      <div className="MobileT3">
        <div className="MobileT4">
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
        </div>
        <p className="PP">
          This is used to create an account in your name on the haqdarshak app
        </p>
        {/* Next button */}
        <button className="button3" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Mobile2;
