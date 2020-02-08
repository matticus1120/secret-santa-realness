import React from "react";

const SetupPlayMusic = ({ bonusIsSet, handlePlayMusic }) => {

  if( !bonusIsSet ) {
    return ''
  }

  const setMusicFalse = (val) => {
    handlePlayMusic('no');
  }

  const setMusicTrue = (val) => {
    handlePlayMusic('yes');
  }

  return (
    <div className="setup-section">
      <div>
        <label>Would you like to play some holidays tunes along the way?</label>
        <div className = "_form-row">
          <button className="btn btn-success" onClick={setMusicFalse}>All is silent please.</button>
          <button className="btn btn-success" onClick={setMusicTrue}>yaaasssss.</button>
        </div>
      </div>
    </div>
  );
};

export default SetupPlayMusic;
