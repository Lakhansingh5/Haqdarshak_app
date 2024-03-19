import React, { useState } from "react";
import "./Page3.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { GoArrowLeft } from "react-icons/go";

const Page3 = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedOption === "register") {
      navigate("/RegisterMe");
    } else if (selectedOption === "phone") {
      navigate("/MobileNo");
    } else if (selectedOption === "yojana") {
      navigate("/YojanaCard");
    }
  };

  return (
    <div className="Pagee3">
      <div className="pagee4">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          How do you want to login
        </h1>
      </div>

      <div className="Pagee5">
        <div class="languagess">
        <label htmlFor="register">
            <input
              type="radio"
              id="register"
              name="loginOption"
              value="register"
              onChange={handleOptionChange}
            />
            Register me as new user
          </label>

          <label htmlFor="phone">
            <input
              type="radio"
              id="phone"
              name="loginOption"
              value="phone"
              onChange={handleOptionChange}
            />
            Use my Phone Number
          </label>


          <label htmlFor="yojana">
            <input
              type="radio"
              id="yojana"
              name="loginOption"
              value="yojana"
              onChange={handleOptionChange}
            />
            Use my Yojana Card
          </label>
          <button className="button1" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
