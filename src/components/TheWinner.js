import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default class TheWinner extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            loadingTime: 7000,
            lastRound: false,
        }

    }

    /*
    Set the initial winner
     */
    componentDidMount = () => {

        this.setWinner();

    }
    
    /*
    set the winnerm, loading gif, loading state
     */
    setWinner = () => {
        
        this.setState({ loading: true });

        // dispatch action to set the reduced people, set the winner
        this.props.setReducedPeople().then(()=>{
            console.log('you did it');
        })
        
        // set the current winner - however, this requires the reduced people to be set
        // -- need to work on waiting for the setReducedPeople to complete before calling the setGiphy action
        // setTimeout(()=>{
            this.props.setGiphy({tag: this.props.currentWinner, type: 'winnerGif'});
            this.props.setGiphy({tag: 'Christmas', type: 'loadingGif'});
        // }, 0) ;

        setTimeout(() => {

           this.setState({ loading: false });
           this.props.setGiphy({tag: false, type: 'loadingGif'});

        }, this.state.loadingTime);


    }

    /*
    Handle the bonus round after completing the full round
     */
    handleBonusRound = () => {

        // this.getRandomGif(this.state.winner);
        
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
            lastRound: true,
        });
    }
    
    /*
    Get content for the winner screen
     */
    getWinnerContent = () => {

        let footerContent = this.state.loading ? '' : this.getFooterContent();

        return (
            
            <div className="winner-columns">
                
                <div className="winner-left">
                    <div className="winner-column-inner">
                        <div className="h1-wrapper">
                            <h1>{this.props.currentWinner}!</h1>
                        </div>
                    </div>
                </div>

                <div className="winner-gif">
                    <div className="winner-column-inner">
                        <div className="winner-gif__img-wrapper">
                            
                            <img src={this.props.giphs.winnerGif.image_url} alt={this.props.giphs.winnerGif.title} />
                            <p className="credit">Img Credit: <a href={this.props.giphs.winnerGif.source} target="_blank" rel="noopener noreferrer" title="Giphy">Giphy</a></p>

                        </div>
                        
                        {footerContent}

                    </div>
                </div>
            </div>

        )

    }

    getLoadingGIf = () => {
        return this.props.giphs.loadingGif ?
            <div className="winner-gif__img-wrapper">
                <img src={this.props.giphs.loadingGif.image_url} alt={this.props.giphs.loadingGif.title} />
                <p className="credit">Img Credit: <a href={this.state.loadingGifUrl} target="_blank" rel="noopener noreferrer" title="Giphy">Giphy</a></p>
            </div> : '';

    }
    
    /*
    get the loading screen
     */
    getLoadingContent = () => {

        return (
            <div className="winner-loading">
                <h2>Loading...</h2>
                {this.getLoadingGIf()}
            </div>
        )
    }
    
    /*
    return the next button
     */
    getNextButton = () => {
    	return (
    		<div className="winner-footer">
	    		<p> {this.props.people.length - this.props.reducedPeople.length} / {this.props.people.length} </p>
	    		<button className="btn btn-success" onClick={this.setWinner}>Who's next?</button>
	    	</div>
    	)
    }   

    /*
    get the last screen - dependant on if there's a bonus round or not
     */
    getWrapUp = () => {
    	
        return this.props.settings.doBonusRound ?

    		 (
    			<div className="start-bonus winner-footer">
        			<h3>Bonus Round</h3>
        			<p>Doesn’t everyone look happy with their gift?</p>
    				<button className="btn btn-success" onClick={this.handleBonusRound}>Turn Those Smiles Upside Down</button>
    			</div>
    		) :

            (
    			<div className="winner-footer">
	    			<h3>That's all!</h3>
	    			<Link to="/all-done" className="btn btn-success">Wrap up...</Link>
	    		</div>
    		)

    }
    
    /*
    get the footer content, dependent on if it's the next or final screen
     */
    getFooterContent() {
    	return this.state.lastRound ? this.getWrapUp() : this.getNextButton();
    }

    render() {

        // console.log('reRender: ', this.props);
        
        // console.log('this.props.giphs.winnerGif', this.props.giphs.winnerGif);

        if( !this.props.giphs.winnerGif || !this.props.currentWinner ) return <div></div>
        
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




