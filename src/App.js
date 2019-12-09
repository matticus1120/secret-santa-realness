import React, { Component, useReducer, useEffect } from "react";
import ReactGA from 'react-ga';


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
import SongPlayer from './components/SongPlayer';
import StarBurst from './components/StarBurst';


import Counter from './components/Counter';

// import createHistory from 'history/createBrowserHistory'
// const history = createHistory()
// history.listen(location => {
//   ReactGA.set({ page: location.pathname })
//   ReactGA.pageview(location.pathname)
// })


/*
pass state to route
https://til.hashrocket.com/posts/z8cimdpghg-passing-props-down-to-react-router-route
https://github.com/ReactTraining/react-router/issues/3554
 */


// function App() {
export default class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        people: [],
        doBonusRound: false,
        musicAnswer: false
      }
  }


  handleSetupSubmit = (values) => {

    const json = JSON.stringify(values.people);
    let people = values.people;
    localStorage.setItem("people", json);

    this.setState({
        people: people,
        doBonusRound: values.doBonusRound,
        musicAnswer: values.musicAnswer
    });

  }

  yourHandler = () => {
    console.log('changing');
  }

  render() {
      return (
          <Router >
           
            <div className="page-wrapper">

              <div className="_container">
                
              <div className="page-wrapper__inner">
                <Route path="/" exact component={Welcome} onChange={this.yourHandler} />
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

                <SongPlayer 
                  musicAnswer={this.state.musicAnswer}
                />

                </div>
                </div>
                <div className="clearfix"></div>
                </div>
        </Router>
      );
      }
}







