/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./haqdarshak2.css";
import { useNavigate } from "react-router-dom";
import Logo2 from "../Haqdarshak/Logo2.png";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Haqdarshak1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Haqdarshak3");
  };

  return (
    <div className="Haqdarshak1" onClick={handleClick}>
      <div className="Haqdarshak2">
        <h1>
          हकदर्शक <br />
          Haqdarshak
        </h1>
        <div className="circle-container">
          <BiSolidCheckboxChecked className="iconss" />
          <p>find the benefit that are right for you or your business</p>

          <AiOutlineLoading3Quarters className="iconss2" />
          <p>Learn everything you need to aplly</p>
          <AiOutlineLoading3Quarters className="iconss2" />
          <p>Save schemes and track your bookings</p>
        </div>
      </div>
    </div>
  );
};

export default Haqdarshak1;
