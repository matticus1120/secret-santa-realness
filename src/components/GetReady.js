import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";

const GetReady = ({ submitPeopleCount }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <div>
     <h3>Get ready</h3>
    </div>
  );
};

export default GetReady;