import React, { Component, useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StoreHelpers from '../store/store-helpers';

import WhosUpLoading from './WhosUpLoading';

import axios from "axios";

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
            loadingTime: 3500,
            peopleReduced: reducedPeople,
            peopleLength: props.people.length,
            winner: false,
            lastRound: false,
            allPeople: JSON.parse(allPeople),
            doBonusRound: props.doBonusRound,
            winnerIndex: 0,
            winnerGifSrc: '',
            loadingGif: ''
        }

        

    }

    getRandomGif = (tag, forWinner = true) => {
        
        var refresh;

        const duration = 1000 * 10;
        const giphy = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            key: "P4WZK1y0inqnsvkQFPUJ3q1aaTrPFpQS",
            tag: tag,
            type: "random",
            rating: "pg-13"
        }

        // Giphy API URL
        let giphyURL = encodeURI(
            giphy.baseURL +
            giphy.type +
            "?api_key=" +
            giphy.key +
            "&tag=" +
            giphy.tag
         );

        if( forWinner ) {
            axios.get(giphyURL).then(jsonResponse => {
              this.setState({
                winnerGifSrc: jsonResponse.data.data.image_original_url
              })
            });
           }
           else {
            axios.get(giphyURL).then(jsonResponse => {
                console.log('jsonResponse.data.data.image_original_url', jsonResponse.data.data.image_original_url);
              this.setState({
                loadingGif: jsonResponse.data.data.image_original_url
              })
            });
           } 

      
    }

    componentDidMount = () => {

        this.getRandomGif('christmas', false);

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
        // this.getRandomGif(theWinner);
        this.getRandomGif(theWinner);
    }

    setWinnerGif = (winner) => {
        // getRandomGif();
    }

    setWinner = () => {
        this.setState({
            loading: false,
        });
        this.handleSetWinner();
    }

    hanldeUpNext = () => {
        this.getRandomGif('christmas', false );
        this.setState({
            loading: true,
            winnerGifSrc: '',
            winner: ''
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

        let footerContent = this.state.loading ? '' : this.getFooterContent();

        return (
            <div className="winner-columns">
                <div className="winner-left">
                    <div className="h1-wrapper">
                        <h1 className="candy-cane">{this.state.winner} !!!!</h1>
                        <h1 className="faker">{this.state.winner} !!!!</h1>
                    </div>
                    </div>
                <div className="winner-gif">
                    <img src={this.state.winnerGifSrc} />
                    {footerContent}
                </div>
            </div>
        )
    }

    getLoadingContent = () => {
        return (
            <div className="winner-loading">
                <h2>Loading...</h2>
                <img src={this.state.loadingGif} />
                </div>
        )
    }

    getNextButton = () => {
    	return (
    		<div className="winner-footer">
	    		<p> {this.state.winnerIndex} / {this.state.allPeople.length} </p>
	    		<button className="btn btn-success" onClick={this.hanldeUpNext}>Who's next?</button>
	    	</div>
    	)
    }

    getWrapUp = () => {
    	if( this.state.doBonusRound ) {
    		return (
    			<div className="start-bonus winner-footer">
    			<h3>Bonus Round</h3>
    			<p>Doesn’t everyone look happy with their gift?</p>
    				<button className="btn btn-success" onClick={this.handleBonusRound}>Turn Those Smiles Upside Down</button>
    			</div>
    		)
    	}
    	else {
    		return (
    			<div className="winner-footer">
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
        // let footerContent = this.state.loading ? '' : this.getFooterContent();

        return (
            <div className="winner-content">
                {content}
             </div>
        )
    }
}




