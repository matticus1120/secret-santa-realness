import React, { Component, useReducer, useEffect } from "react";
import ReactGA from 'react-ga';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/style.scss";




import { initialState, reducer, appStore } from "./store/reducer";

import MetaTags from 'react-meta-tags';


import Welcome from './components/Welcome';
import Instructions from './components/Instructions';
import Setup from './components/Setup';
import GetReady from './components/GetReady';
import WhosUp from './components/WhosUp';
import TheWinner from './components/TheWinner';
import AllDone from './components/AllDone';
import SongPlayer from './components/SongPlayer';
import StarBurst from './components/StarBurst';

ReactGA.initialize('UA-131051020-1');

// function App() {
export default class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        people: [],
        doBonusRound: false,
        musicAnswer: false
      }
      ReactGA.pageview(window.location.pathname + window.location.search);
  }

  setRoutePageview = (pageViewTitle) => {
    ReactGA.pageview( pageViewTitle );
  }


  handleSetupSubmit = (values) => {

    const json = JSON.stringify(values.allPeople);
    let people = values.allPeople;
    localStorage.setItem("people", json);

    this.setState({
        people: people,
        doBonusRound: values.doBonusRound,
        musicAnswer: values.musicAnswer
    });

  }

  setWrapUpStats = (stats) => {
    var peopleLength = stats.peopleLength.toString();
    ReactGA.event({
      category: 'Game Play',
      action: 'Game Completion',
      label: 'Complete'
    });
    ReactGA.event({
      category: 'Game Play',
      action: 'Game People Count',
      label: peopleLength
    });

  }

  yourHandler = () => {
    // console.log('changing');
  }

  render() {
      return (
          <Router >
           
            <div className="page-wrapper">


              <div className="_container">
                
              <div className="page-wrapper__inner">
                <Route path="/" exact component={Welcome} onChange={this.yourHandler} />

                <Route path="/instructions"
                  render={(routeProps) => (
                      <Instructions
                        setRoutePageview={this.setRoutePageview}
                      />
                    ) }
                  />


                <Route path="/setup" 
                  render={(routeProps) => (
                      <Setup
                        handleSetupSubmit={this.handleSetupSubmit}
                        setRoutePageview={this.setRoutePageview}
                      />
                    )}
                />
                
                <Route path="/get-ready" 
                  render={(routeProps) => (
                      <GetReady
                        setRoutePageview={this.setRoutePageview}
                      />
                    )}
                />

                <Route path="/whos-up" 
                  render={(routeProps) => (
                      <WhosUp
                        setRoutePageview={this.setRoutePageview}
                      />
                    )}
                />

                <Route path="/the-winner" 
                  render={(routeProps) => (
                      <TheWinner
                        people={this.state.people}
                        doBonusRound={this.state.doBonusRound}
                        everything={this.state}
                        setRoutePageview={this.setRoutePageview}
                      />
                    )}
                />

                <Route path="/all-done" 
                  render={(routeProps) => (
                      <AllDone
                        people={this.state.people}
                        everything={this.state}
                        setRoutePageview={this.setRoutePageview}
                        setWrapUpStats={this.setWrapUpStats}
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







