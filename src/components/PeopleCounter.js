import React, { useState } from "react";

const PeopleCounter = ({ submitPeopleCount }) => {
  const [countValue, setCountValue] = useState("");

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
      <input onClick={handlePeopleCount} className="btn btn-success" type="submit" value="Submit" />
    </form>
  );
};

export default PeopleCounter;
