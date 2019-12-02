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
    <form className="search">
      <input
        value={countValue}
        onChange={handleSearchCountChange}
        type="number"
        className="form-control"
      />
      <button onClick={handlePeopleCount} className="btn btn-success">Next</button>
    </form>
  );
};

export default SetupPeopleCounter;
