import React from "react";
import "./MobileNo.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const MobileNo = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="PDetails1">
      <div className="PDetails2">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          Choose location{" "}
        </h1>
      </div>

      <div className="PDetails3">
        <div className="PDetails4"></div>
      </div>
    </div>
  );
};

export default MobileNo;
