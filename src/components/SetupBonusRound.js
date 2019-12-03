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
    <div className="setup-section">
    <div>
      <h3>Bonus Round, Anyone?</h3>
      <div className = "_form-row">
        <button className="btn btn-danger" onClick={setBonusRoundTrue}>Oh, We Couldn’t Possibly</button>
        <button className="btn btn-success" onClick={setBonusRoundFalse}>Well, If You Insist</button>
      </div>
    </div>
    </div>
  );
};

export default SetupBonusRound;
