import React from "react";
import "./RegisterMe.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MdMyLocation } from "react-icons/md";

const RegisterMe = ({
  selectedState,
}) => {
  const navigate = useNavigate();
  
  const handleNextClick = () => {
    navigate("/Whereareyoufrom"); 
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    // Navigate to the appropriate page based on the selected value
    selectedValue === "State" && navigate("/Whereareyoufrom");
  };
  
  return (
    <div className="register1">
      <div className="register2">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          Choose location
        </h1>
      </div>

      <div className="register3">
        <div className="register4">
          <select value={selectedState} onChange={handleSelectChange}>
            <option value="SelectState">Select State</option>
            <option value="State">State</option>
            {/* Add more options as needed */}
          </select>
          <h2>
            <span>OR</span>
          </h2>
          <h3 className="loaction" onClick={handleNextClick}>
            <MdMyLocation className="Liocn" />
            Use your current location
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RegisterMe;
