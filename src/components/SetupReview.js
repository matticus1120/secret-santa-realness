import React, { useState } from "react";

const personJabs = [
  "[Name] doesn’t look ready. Check their pulse.",
  "Is a doctor present? I’m worried about [Name].",
  "[Name], do you know where you are?",
  "Somebody should wake up Uncle [Name].",
  "[Name], stand up straight.",
  "[Name], breathe through your nose.",
  "You may need to explain the rules to [Name] again.",
  "[Name], get your finger out of your nose"
]

const SetupReview = ({ readyForReview, submitSetup, setupValues }) => {

  if( !readyForReview ) {
    return '';
  }

  var peopleNames = setupValues.people.join(', ');
  var bonusRoundString = setupValues.doBonusRound ? `You are doing a bonus round.` : `Fine, no bonus round`;

  const getJab = () => {
    var peopleLength = setupValues.people.length;
    var randomPersonNumber = Math.floor((Math.random() * peopleLength) + 1) - 1;
    var randomPerson = setupValues.people[ randomPersonNumber ];
    var randomJabNumber = Math.floor((Math.random() * personJabs.length) + 1) - 1;
    var randomJab = personJabs[ randomJabNumber ];
    var personJab = randomJab.replace('[Name]', randomPerson);
    return personJab;
  }

  var jab = getJab();

  return (
  <div className="setup-section">
    <div>
      <h3>Are you a liar?</h3>
      <h4>Or is this information correct?</h4>
      <div className="">

        <div className="form-review">
          <p><strong>The Players:</strong> Are {peopleNames} ready to party?</p>
          <p><strong>Bonus round?</strong> {bonusRoundString}</p>
          <p><strong>{jab}</strong></p>
        </div>

        <div>

        <h3>Are you ready to party?</h3>
          <button className="btn btn-success" onClick={submitSetup} >Ok Let’s Party</button>
        </div>
        
      </div>
    </div>
    </div>

  );
};

export default SetupReview;