import React, { Component, useReducer, useEffect } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/style.scss";




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


// function App() {
export default class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        people: [],
        doBonusRound: false,
      }
  }

  componentDidMount = () => {
    var people = localStorage.getItem("people") ? JSON.parse(localStorage.getItem("people")) : [];
    console.log('people from storage ', people);
    this.setState({
      people: people
    });
  }

  handleSetupSubmit = (values) => {

    const json = JSON.stringify(values.people);
    let people = values.people;
    localStorage.setItem("people", json);

    this.setState({
        people: people,
        doBonusRound: values.doBonusRound,
    });

  }

  render() {
      return (
          <Router>
            <nav className="navbar navbar-expand-lg">
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
                        handleSetupSubmit={this.handleSetupSubmit}
                      />
                    )}
                />
                <Route path="/get-ready" component={GetReady} />
                <Route path="/whos-up" component={WhosUp} />
                <Route path="/the-winner" 
                  render={(routeProps) => (
                      <TheWinner
                        people={this.state.people}
                        doBonusRound={this.state.doBonusRound}
                        everything={this.state}
                      />
                    )}
                />

                <Route path="/all-done" 
                  render={(routeProps) => (
                      <AllDone
                        people={this.state.people}
                      />
                    )}
                />

                </div>
                </div>
                <div className="clearfix"></div>
                </div>
        </Router>
      );
      }
}







