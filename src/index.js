// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

import "./index.css";
import RegisterMe from "./components/RegisterMe/RegisterMe";
import MobileNo from "./components/RegisterMe/MobileNo";
import YojanaCard from "./components/RegisterMe/YojanaCard";
import Whereareyoufrom from "./components/RegisterMe/Whereareyoufrom";
import District from "./components/RegisterMe/District/District";
import PinCode from "./components/RegisterMe/PinCode";
import Mobile2 from "./components/RegisterMe/Mobile2";
import OTP from "./components/RegisterMe/OTP";
import PersonelDetails from "./components/RegisterMe/PersonelDetails/PersonelDetails";
import Haqdarshak1 from "./components/RegisterMe/Haqdarshak/haqdarshak1";
import Haqdarshak2 from "./components/RegisterMe/Haqdarshak/haqdarshak2";
import Haqdarshak3 from "./components/RegisterMe/Haqdarshak/haqdarshak3";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/RegisterMe" element={<RegisterMe />} />
        <Route path="/MobileNo" element={<MobileNo />} />
        <Route path="/YojanaCard" element={<YojanaCard />} />
        <Route path="/Whereareyoufrom" element={<Whereareyoufrom />} />
        <Route path="/District" element={<District />} />
        <Route path="/PinCode" element={<PinCode />} />
        <Route path="/Mobile2" element={<Mobile2 />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/PersonelDetails" element={<PersonelDetails />} />
        <Route path="/Haqdarshak1" element={<Haqdarshak1 />} />
        <Route path="/Haqdarshak2" element={<Haqdarshak2 />} />
        <Route path="/Haqdarshak3" element={<Haqdarshak3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
