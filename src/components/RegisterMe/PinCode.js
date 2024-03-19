import React, { useState } from "react";
import "./PinCode.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const PinCode = () => {
  // State variables
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPinCode, setSelectedPinCode] = useState("");

  // Router navigation
  const navigate = useNavigate();

  // Define states and districts
  const stateDistricts = {
    "Andhra Pradesh": [
      { name: "Anantapur", pincodes: ["PIN1", "PIN2", "PIN3"] },
      { name: "Chittoor", pincodes: ["PIN4", "PIN5", "PIN6"] },
      { name: "East Godavari", pincodes: ["PIN1", "PIN2", "PIN3"] },
      { name: "Guntur", pincodes: ["PIN4", "PIN5", "PIN6"] },
    ],
    "Arunachal Pradesh": [
      { name: "Twang", pincodes: ["PIN1", "PIN2", "PIN3"] },
      { name: "Papum Pare", pincodes: ["PIN4", "PIN5", "PIN6"] },
    ],
    Assam: [
      { name: "Baksa", pincodes: ["PIN1", "PIN2", "PIN3"] },
      { name: "Barpeta", pincodes: ["PIN4", "PIN5", "PIN6"] },
    ],
    // Add more states and districts as needed
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    setSelectedPinCode("");
  };

  // Event handler for district change
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedPinCode("");
  };

  // Event handler for pincode change
  const handlePinCodeChange = (e) => {
    const pincode = e.target.value;
    setSelectedPinCode(pincode);
    // Navigate to the Mobile2 page
    navigate(`/mobile2?state=${selectedState}&district=${selectedDistrict}&pincode=${pincode}`);
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
                <option key={district.name} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
          )}

          {/* PinCode dropdown (conditionally rendered) */}
          {selectedDistrict && (
            <select value={selectedPinCode} onChange={handlePinCodeChange}>
              <option value="">Select PinCode</option>
              {stateDistricts[selectedState]
                .find((district) => district.name === selectedDistrict)
                .pincodes.map((pincode) => (
                  <option key={pincode} value={pincode}>
                    {pincode}
                  </option>
                ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default PinCode;
