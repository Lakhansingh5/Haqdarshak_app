/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Page1.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/page2");
  };

  return (
    <div className="Page1" onClick={handleClick}>
      <div className="Page2">
        <h1 className="getting">
          Getting <br/> benefits is <br/><applet></applet> now easy! <br />
          <span className="underline">____</span>
        </h1>
        <img className="img" src={logo} />
      </div>
    </div>
  );
};

export default Page1;
