import React, { useReducer, useEffect } from "react";
import "./scss/style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { initialState, reducer, appStore } from "./store/reducer";

import Welcome from './components/Welcome';
import Instructions from './components/Instructions';
import Setup from './components/Setup';
import GetReady from './components/GetReady';
import WhosUp from './components/WhosUp';
import TheWinner from './components/TheWinner';
import AllDone from './components/AllDone';


import Counter from './components/Counter';


/*
pass state to route
https://til.hashrocket.com/posts/z8cimdpghg-passing-props-down-to-react-router-route
 */


function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log('state', state);


    /*
    submit the entire setup form
     */
    const handleSetupSubmit = (values) => {
        dispatch({
            type: "SET_GAME_VALUES",
            payload: values
        });
    }

    /*
    set the round winner - no values passed
     */
    const handleSetWinner = (values) => {
        dispatch({
            type: "SET_WINNER"
        });
    }

    return (
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Welcome</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/instructions" className="nav-link">Instructions</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/setup" className="nav-link">Setup</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/get-ready" className="nav-link">GetReady</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/whos-up" className="nav-link">WhosUp</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/the-winner" className="nav-link">TheWinner</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/all-done" className="nav-link">AllDone</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/counter" className="nav-link">Counter</Link>
                </li>
                <li className="navbar-item">
                  <a className="nav-link disabled">1 people</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="page-wrapper">

            <div className="container">
            <div className="page-wrapper__inner">
              <Route path="/" exact component={Welcome} />
              <Route path="/counter" component={Counter} />
              <Route path="/instructions" component={Instructions} />
              <Route path="/setup" 
                render={(routeProps) => (
                    <Setup
                      handleSetupSubmit={handleSetupSubmit}
                    />
                  )}
              />
              <Route path="/get-ready" component={GetReady} />
              <Route path="/whos-up" component={WhosUp} />
              <Route path="/the-winner" 
                render={(routeProps) => (
                    <TheWinner
                      handleSetWinner={handleSetWinner}
                      winner={state.winner}
                      reducedPeople={state.reducedPeople}
                      people={state.people}
                    />
                  )}
              />
              <Route path="/all-done" component={AllDone} />
              </div>
              </div>
              </div>
      </Router>
    );
}







export default App;