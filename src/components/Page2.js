import React from "react";
import "./Page2.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { GoArrowLeft } from "react-icons/go";

const Page2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  const handleNextClick = () => {
   navigate("/page3"); 
  };

  return (
    <div className="Page3">
      <div className="page4">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          Which language <br />
          do you prefer
        </h1>
      </div>

      <div className="Page5">
        <div class="languages">
          <label htmlFor="lang-english">
            <input
              type="radio"
              id="lang-english"
              name="language"
              value="english"
            />
            English
          </label>

          <label htmlFor="lang-hindi">
            <input type="radio" id="lang-hindi" name="language" value="hindi" />
            हिंदी
          </label>

          <label htmlFor="lang-kannada">
            <input
              type="radio"
              id="lang-kannada"
              name="language"
              value="kannada"
            />
            ಕನ್ನಡ
          </label>
          <p>
            This allows you to experience the app in a language of your
            experience.
          </p>

          <button type="submit" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
