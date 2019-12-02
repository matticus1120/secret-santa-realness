import React, { useState } from "react";

const SetupBonusRound = ({ peopleAreSet, handleBonusRound }) => {

  if( !peopleAreSet ) {
    return ''
  }

  const setBonusRoundTrue = (val) => {
    handleBonusRound(true);
  }
  const setBonusRoundFalse = (val) => {
    handleBonusRound(false);
  }

  

  return (
    <div>
      <h3>Gonna do a bonus round?</h3>
      <div className = "form-row">
        <button className="btn btn-danger" onClick={setBonusRoundTrue}>Nah I am gouda.</button>
        <button className="btn btn-success" onClick={setBonusRoundFalse}>Sure, yes.</button>
      </div>
    </div>
  );
};

export default SetupBonusRound;
