/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./haqdarshak3.css";
import { useNavigate } from "react-router-dom";
import Logo2 from "../Haqdarshak/Logo2.png";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Haqdarshak1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="Haqdarshakk1" onClick={handleClick}>
      <div className="Haqdarshakk2">
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
        <button className="button7">Get Started!</button>
        </div>
      </div>
    </div>
  );
};

export default Haqdarshak1;
