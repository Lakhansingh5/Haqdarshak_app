// App.js
import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/page1");
  };

  return (
    <div className="container" onClick={handleClick}>
      <div>
        {" "}
        <h1 className="heading">
          हकदर्शक
          <br />
          <span className="eng-head"> Haqdarshak</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
