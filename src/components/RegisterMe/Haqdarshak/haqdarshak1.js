/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import "./haqdarshak1.css";
import { useNavigate } from "react-router-dom";
import Logo2 from '../Haqdarshak/Logo2.png'

const Haqdarshak1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Haqdarshak2");
  };

  return (
    <div className="Haqdarshak1" onClick={handleClick}>
      <div className="Haqdarshak2">
        <h1>
          <span>Welcome to</span>
          हकदर्शक <br />
          Haqdarshak
        </h1>
        <p>
          Your profile has been created <br />
          succesfully!
        </p>
      </div>
    </div>
  );
};

export default Haqdarshak1;
