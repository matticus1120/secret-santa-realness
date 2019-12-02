import React, { useState } from "react";

const SetupReview = ({ readyForReview, submitSetup, setupValues }) => {

  if( !readyForReview ) {
    return '';
  }

  var peopleNames = setupValues.people.join(', ');
  var bonusRoundString = setupValues.doBonusRound ? `You are doing a bonus round.` : `Fine, no bonus round`;

  return (
    <div>
      <h3>Ready to go?!?!?!</h3>
      <div className="">

        <div className="form-review">
          <p>{peopleNames}</p>
          <p>{bonusRoundString}</p>
        </div>

        <div>
          <button className="btn btn-danger">Nah let's edit.</button>
          <button className="btn btn-success" onClick={submitSetup} >Let's go!!</button>
        </div>
        
      </div>
    </div>

  );
};

export default SetupReview;