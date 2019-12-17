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
            // loadingTime: 5500,
            loadingTime: 94500,
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

    /*
    Make a request to the GIPHY API, set state.
     */
    getRandomGif = (tag, forWinner = true) => {
        
        var refresh;

        const duration = 1000 * 10;
        const giphy = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            key: "P4WZK1y0inqnsvkQFPUJ3q1aaTrPFpQS",
            tag: tag,
            type: "random",
            rating: "g"
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
                console.log('jsonResponse.data.data', jsonResponse.data.data);
              this.setState({
                winnerGifSrc: jsonResponse.data.data.image_original_url,
                winnerGifUrl: jsonResponse.data.data.url
              })
            });
           }
           else {
            axios.get(giphyURL).then(jsonResponse => {
              this.setState({
                loadingGif: jsonResponse.data.data.image_original_url,
                loadingGifUrl: jsonResponse.data.data.url
              })
            });
           } 

      
    }

    /*
    Set the initial winner
     */
    componentDidMount = () => {

        this.getRandomGif('christmas', false);

        this.props.setRoutePageview('/the-winner');

        setTimeout(() => {

            this.setWinner();

        }, this.state.loadingTime);

    }

    
    /*
    set the winner
     */
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
        this.getRandomGif(theWinner);
    }

   /* setWinnerGif = (winner) => {
        this.getRandomGif(this.state.winner);
    }*/

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

    /*
    Handle the bonus round after completing the full round
     */
    handleBonusRound = () => {
        this.setState({
            loading: true,
        });
        // this.setWinnerGif(this.state.winner);
        this.getRandomGif(this.state.winner);
        setTimeout(() => {

            this.setBonusWinner();

        }, this.state.loadingTime);
    }

    /*
    Set the bonus round by "faking" an actual round
    and setting bonus to false
     */
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
    
    /*
    Get content for the winner screen
     */
    getWinnerContent = () => {

        let footerContent = this.state.loading ? '' : this.getFooterContent();

        let winnerAlt = `Special gif for ${this.state.winner}`;

        return (
            <div className="winner-columns">
                <div className="winner-left">
                    <div className="winner-column-inner">
                        <div className="h1-wrapper">
                            <h1>{this.state.winner}!!!!</h1>
                        </div>
                    </div>
                </div>
                <div className="winner-gif">
                <div className="winner-column-inner">
                    <div className="winner-gif__img-wrapper">
                        <img src={this.state.winnerGifSrc} alt={winnerAlt} />
                        <p className="credit">Img Credit: <a href={this.state.winnerGifUrl} target="_blank" title="Giphy">Giphy</a></p>
                        </div>
                    {footerContent}

                    </div>
                </div>
            </div>
        )
    }
    
    /*
    get the loading screen
     */
    getLoadingContent = () => {
        return (
            <div className="winner-loading">
                <h2>Loading...</h2>
                <div className="winner-gif__img-wrapper">
                <img src={this.state.loadingGif} />
                <p className="credit">Img Credit: <a href={this.state.loadingGifUrl} target="_blank" title="Giphy">Giphy</a></p>
                </div>
                </div>
        )
    }
    
    /*
    return the next button
     */
    getNextButton = () => {
    	return (
    		<div className="winner-footer">
	    		<p> {this.state.winnerIndex} / {this.state.allPeople.length} </p>
	    		<button className="btn btn-success" onClick={this.hanldeUpNext}>Who's next?</button>
	    	</div>
    	)
    }   

    /*
    get the last screen - dependant on if there's a bonus round or not
     */
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
    
    /*
    get the footer content, dependent on if it's the next or final screen
     */
    getFooterContent() {
    	return this.state.lastRound ? this.getWrapUp() : this.getNextButton();
    }

    render() {
        
        let content = this.state.loading ? this.getLoadingContent() : this.getWinnerContent();

        var outerClasses = 'main main--winner ';
    outerClasses += this.state.loading ? 'main--is-winner-loading' : 'main--is-winner-announced';



        return (
            <div className={outerClasses}>
                <div className="winner-content">
                    <div className="container">
                        {content}
                    </div>
                 </div>
            </div>
        )
    }
}




