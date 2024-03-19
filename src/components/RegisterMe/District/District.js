import React, { useState } from "react";
import "./District.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const District = () => { // Updated component name
  // State variables
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Router navigation
  const navigate = useNavigate();

  // Define states and districts
  const stateDistricts = {
    "Andhra Pradesh": [
      "Anantapur",
      "Chittoor",
      "East Godavari",
      "Guntur",
      "Krishna",
      "Kurnool",
      "Prakasam",
      "Srikakulam",
      "Sri Potti Sriramulu Nellore",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "YSR District, Kadapa (Cuddapah)",
    ],
    "Arunachal Pradesh": [
      "Tawang",
      "West Kameng",
      "East Kameng",
      "Papum Pare",
      "Kurung Kumey",
      "Kra Daadi",
      "Lower Subansiri",
      "Upper Subansiri",
      "West Siang",
      "East Siang",
      "Siang",
      "Upper Siang",
      "Lower Siang",
      "Lower Dibang Valley",
      "Dibang Valley",
      "Anjaw",
      "Lohit",
      "Namsai",
      "Changlang",
      "Tirap",
      "Longding",
    ],
    Assam: [
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup Metropolitan",
      "Kamrup",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Dima Hasao",
      "Sivasagar",
      "Sonitpur",
      "South Salmara-Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong",
    ],
    // Add more states and districts as needed
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
  };

  // Event handler for district change
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    // Navigate to the PinCode page
    navigate(`/pincode?state=${selectedState}&district=${district}`);
  };

  // Event handler for back button click
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="district1">
      <div className="district2">
        <h1>
          <GoArrowLeft className="arrow" onClick={handleBackClick} />
          <br />
          Where are you from?
        </h1>
      </div>

      <div className="district3">
        <div className="district4">
          {/* State dropdown */}
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {Object.keys(stateDistricts).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* District dropdown */}
          {selectedState && (
            <select value={selectedDistrict} onChange={handleDistrictChange}>
              <option value="">Select District</option>
              {stateDistricts[selectedState].map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default District; // Updated export
