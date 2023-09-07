import React from "react";
import { v4 as uuidv4 } from "uuid";

const Props = ({
  country,
  selectedCurrency,
  handleChange,
  amount,
  onChangeAmount,
}) => {
  // console.log(country);
  return (
    <div className="propContainer">
      <div className="inputContainer">
        <input
          placeholder="Amount"
          name="amount"
          value={amount}
          type="number"
          onChange={onChangeAmount}
        />
      </div>
      <select
        name="cars"
        id="cars"
        value={selectedCurrency}
        onChange={handleChange}
      >
        {country.map((option) => (
          <option value={option} key={uuidv4()} onChange={handleChange}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Props;
