import React, { useState } from "react";

const SetupBonusRound = ({ peopleAreSet, handleBonusRound }) => {

  if( !peopleAreSet ) {
    return <div></div>
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
      <label>Bonus Round, Anyone?</label>
      <div className = "_form-row">
        <button className="btn btn-success" onClick={setBonusRoundFalse}>Oh, We Couldn’t Possibly</button>
        <button className="btn btn-success" onClick={setBonusRoundTrue}>Well, If You Insist</button>
      </div>
    </div>
    </div>
  );
};

export default SetupBonusRound;
