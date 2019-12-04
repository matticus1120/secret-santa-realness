import React, { Component, useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StoreHelpers from '../store/store-helpers';

import WhosUpLoading from './WhosUpLoading';

function getSetWinners() {
    // const [state, dispatch] = useReducer(reducer, initialState);
}

export default class TheWinner extends Component {

    constructor(props) {
        super(props);

        // All people keeps changing both variables, cheating like this
        var allPeople = JSON.stringify(props.people);
        var reducedPeople = props.people;

        this.state = {
            loading: true,
            loadingTime: 2000,
            peopleReduced: reducedPeople,
            peopleLength: props.people.length,
            winner: false,
            lastRound: false,
            allPeople: JSON.parse(allPeople),
            doBonusRound: props.doBonusRound,
            winnerIndex: 0
        }

    }

    componentDidMount = () => {

        setTimeout(() => {

            this.setWinner();

        }, this.state.loadingTime);

    }

    handleSetWinner = () => {
    	let peopleReduced = this.state.peopleReduced;
        let winningInfo = StoreHelpers.getWinnerReducedPeople(peopleReduced);
        let theWinner = winningInfo.winner;
        this.setState({
            winner: theWinner,
            peopleReduced: winningInfo.peopleReduced,
            lastRound: winningInfo.peopleReduced == 0,
            winnerIndex: this.state.allPeople.length - peopleReduced.length
        });
    }

    setWinner = () => {
        this.setState({
            loading: false,
        });
        this.handleSetWinner();
    }

    hanldeUpNext = () => {
        this.setState({
            loading: true,
        });
        setTimeout(() => {

            this.setWinner();

        }, this.state.loadingTime);
    }

    handleBonusRound = () => {
        this.setState({
            loading: true,
        });
        setTimeout(() => {

            this.setBonusWinner();

        }, this.state.loadingTime);
    }

    setBonusWinner = () => {
        this.setState({
            loading: false,
        });
        let winningInfo = StoreHelpers.getWinnerReducedPeople(this.state.allPeople);
        let theWinner = winningInfo.winner;
        this.setState({
            winner: theWinner,
            lastRound: true,
            doBonusRound: false
        });
    }
    _setBonusWinner = () => {
    	// console.log('this.state.people', this.state.people);
    	let winningInfo = StoreHelpers.getWinnerReducedPeople(this.state.people);
        let theWinner = winningInfo.winner;
        this.setState({
            winner: theWinner,
            lastRound: true,
            doBonusRound: false
        });
    }

    getWinnerContent = () => {

        return (
            <div>
                <h2>The winner is {this.state.winner}</h2>
                
            </div>
        )
    }

    getLoadingContent = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    getNextButton = () => {
    	return (
    		<div>
	    		<p> {this.state.winnerIndex} / {this.state.allPeople.length} </p>
	    		<button className="btn btn-success" onClick={this.hanldeUpNext}>Who's next?</button>
	    	</div>
    	)
    }

    getWrapUp = () => {
    	if( this.state.doBonusRound ) {
    		return (
    			<div className="start-bonus">
    			<h3>Bonus Round</h3>
    			<p>Doesn’t everyone look happy with their gift?</p>
    				<button className="btn btn-success" onClick={this.handleBonusRound}>Turn Those Smiles Upside Down</button>
    			</div>
    		)
    	}
    	else {
    		return (
    			<div>
	    			<h3>That's all!</h3>
	    			<Link to="/all-done" className="btn btn-success">Wrap up...</Link>
	    		</div>
    		)
    	}
    }

    getFooterContent() {
    	return this.state.lastRound ? this.getWrapUp() : this.getNextButton();
    }

    render() {
        
        let content = this.state.loading ? this.getLoadingContent() : this.getWinnerContent();
        let footerContent = this.state.loading ? '' : this.getFooterContent();

        return (
            <div className="winner-content">
                {content}
                {footerContent}
             </div>
        )
    }
}




