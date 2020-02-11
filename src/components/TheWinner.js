import React, { Component } from "react";

import { BrowserRouter as Link } from "react-router-dom";

import StoreHelpers from '../store/store-helpers';

import axios from "axios";

export default class TheWinner extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            loadingTime: 3000,
            lastRound: false,
            doBonusRound: this.props.settings.doBonusRound,
            winnerIndex: 0,
            winnerGifSrc: '',
            loadingGif: ''
        }

        

    }

    /*
    Make a request to the GIPHY API, set state.
     */
    getRandomGif = (tag, forWinner = true) => {

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
        this.setWinner();

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, this.state.loadingTime);

    }

    
    /*
    set the winner
     */
    handleSetWinner = () => {
        this.props.setReducedPeople();
        this.props.setGiphy({tag: 'trevor noah', type: 'winnerGif'});
    }

    setWinner = () => {
        this.setState({
            loading: false,
        });
        this.handleSetWinner();
    }

    hanldeUpNext = () => {
        this.getRandomGif('christmas', false );
        this.props.setGiphy({tag: 'trevor noah', type: 'loadingGif'});
        this.setState({
            loading: true,
            winnerGifSrc: '',
            winner: ''
        });

        this.setWinner();

        setTimeout(() => {

            this.setState({
                loading: false
            })

        }, this.state.loadingTime);
    }

    /*
    Handle the bonus round after completing the full round
     */
    handleBonusRound = () => {

        this.getRandomGif(this.state.winner);
        
        this.setBonusWinner();

        setTimeout(() => {
            this.setState({
                loading: true,
            });
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
        let winningInfo = StoreHelpers.getWinnerReducedPeople(this.props.people);
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

        console.log('this.props', this.props);

        return (
            <div className="winner-columns">
                <div className="winner-left">
                    <div className="winner-column-inner">
                        <div className="h1-wrapper">
                            <h1>{this.props.currentWinner}!!!!</h1>
                        </div>
                    </div>
                </div>
                <div className="winner-gif">
                <div className="winner-column-inner">
                    <div className="winner-gif__img-wrapper">
                        <img src={this.props.gifs.winnerGif} alt={winnerAlt} />
                        <p className="credit">Img Credit: <a href={this.state.winnerGifUrl} target="_blank" rel="noopener noreferrer" title="Giphy">Giphy</a></p>
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
                <img src={this.state.loadingGif} alt="Winner Gif" />
                <p className="credit">Img Credit: <a href={this.state.loadingGifUrl} target="_blank" rel="noopener noreferrer" title="Giphy">Giphy</a></p>
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
	    		<p> {this.state.winnerIndex} / {this.props.people.length} </p>
	    		<button className="btn btn-success" onClick={this.hanldeUpNext}>Who's next?</button>
	    	</div>
    	)
    }   

    /*
    get the last screen - dependant on if there's a bonus round or not
     */
    getWrapUp = () => {
    	if( this.props.settings.doBonusRound ) {
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

        if( !this.props.gifs ) return <div></div>
        
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




