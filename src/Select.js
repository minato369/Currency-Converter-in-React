import React from "react";
import { v4 as uuidv4 } from "uuid";

const Select = ({ allCountry, selectedCountry, handleChange }) => {
  return (
    <div className="select">
      <select
        className="selectTag"
        value={selectedCountry}
        onChange={handleChange}
      >
        {allCountry.map((options) => (
          <option value={options} key={uuidv4()}>
            {options}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
