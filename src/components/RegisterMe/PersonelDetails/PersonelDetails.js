import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import "./PersonelDetails.css";

const PersonelDetails = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleNextClick = () => {
    if (name && gender && dob) {
      // Check if all fields are filled
      navigate("/Haqdarshak1"); // Navigate to Haqdarshak1 page
    } else {
      alert("Please fill in all details."); // Show alert if any field is empty
    }
  };

  return (
    <div className="PDetails1">
      <div className="PDetails2">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          Personal Details
        </h1>
      </div>

      <div className="PDetails3">
        <div className="PDetails4">
          <label htmlFor="nameInput" className="Label1">
            Name:
          </label>
          <input
            type="text"
            id="nameInput"
            className="Label"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
          <hr />
          <div className="Labell">
            <h1>Gender</h1>

            <div className="Labelll">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={handleGenderChange}
                />
                Other
              </label>
              <hr />

              <div className="DOB">
                <h1>DOB/Age</h1>
                <div className="DOB2">
                  <label htmlFor="nameInput"></label>
                  <input
                    className="Label2"
                    type="date"
                    id="nameInput"
                    placeholder="Enter your Birthday"
                    value={dob}
                    onChange={handleDobChange}
                  />
                  <h5> OR</h5>
                  <div className="Label3">
                    <input
                      type="number"
                      id="nameInput"
                      placeholder="Age"
                      value={age}
                      onChange={handleAgeChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            This information helps us suggest schemes that are right for you.
          </p>
          <button className="button5" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonelDetails;
