import React, { useState } from "react";

const SetupPeopleCounter = ({ submitPeopleCount }) => {
  const [countValue, setCountValue] = useState("2");

  const handleSearchCountChange = e => {
    setCountValue(e.target.value);
  };

  const resetInputField = () => {
    // setCountValue("");  
  };

  const handlePeopleCount = e => {
    e.preventDefault(); 
    submitPeopleCount(countValue);
    resetInputField();
  };

  return (
    <div className="setup-section setup-section--counter">
      <div className="form-row form-row--people-counter">
        <label htmlFor="people-counter">Number of Participants</label>
          <input
            name="people-counter"
            value={countValue}
            onChange={handleSearchCountChange}
            type="number"
            className="form-control"
            min="1"
            max="30"
          />
          <div className="cta-row">
          <button onClick={handlePeopleCount} className="btn btn-success">Next</button>
          </div>
      </div>
    </div>
  );
};

export default SetupPeopleCounter;
