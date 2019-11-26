import React, { useState } from "react";

const PersonInput = ({ submitPeopleCount, personIndex }) => {
  const [name, setName] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const resetInputField = () => {
    // setCountValue("");  
  };

  const handlePeopleCount = e => {
    e.preventDefault(); 
    submitPeopleCount(name);
    resetInputField();
  };

  return (
    <div>
      <input
        value={name}
        className="form-control"
        onChange={handleNameChange}
        placeHolder={`Person #${personIndex + 1}`}
        type="text"
        />
    </div>
  );
};

export default PersonInput;
