// DistrictAPI.js

import stateDistricts from "../District/StateDistrictData";

const fetchDistricts = (stateName) => {
  return stateDistricts[stateName] || [];
};

export default fetchDistricts;
