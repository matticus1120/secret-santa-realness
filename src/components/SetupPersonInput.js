import React, { useState } from "react";

const SetupPersonInput = ({ setPersonName, personIndex }) => {
  const [name, setName] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
    setPersonName(  e.target.value, personIndex );
  };

  return (
    <div>
      <input
        value={name}
        className="form-control"
        onChange={handleNameChange}
        placeholder={`Person #${personIndex + 1}`}
        type="text"
        />
    </div>
  );
};

export default SetupPersonInput;
