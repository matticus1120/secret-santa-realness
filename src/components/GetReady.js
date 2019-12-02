import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";

import {Link } from "react-router-dom";

const GetReady = ({ submitPeopleCount }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <div>
     <h3>Get ready</h3>
     <Link to='/whos-up'>Get started!</Link>
    </div>
  );
};

export default GetReady;