import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";

import {Link } from "react-router-dom";

const GetReady = ({ submitPeopleCount }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="get-ready">
     <h3>Who’s Up First?</h3>
     <Link className="btn btn-success" to='/the-winner'>Click Here to Find Out</Link>
    </div>
  );
};

export default GetReady;