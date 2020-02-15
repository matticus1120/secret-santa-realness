import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import SetupPeopleCounter from './setup/SetupPeopleCounter';
import PersonForms from './setup/PersonForms';
import SetupBonusRound from './setup/SetupBonusRound';
import SetupReview from './setup/SetupReview';
import SetupPlayMusic from './setup/SetupPlayMusic';

import StarBurst from './StarBurst';

const scrollToRef = (ref, timeout = 300 ) => {
    setTimeout(()=>{
        window.scrollTo(0, ref.current.offsetTop)
    }, timeout);
}

export default class Setup extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            setupComplete: false
        }

        this.mainRef = React.createRef();
        this.personForms = React.createRef();
        this.bonusRound = React.createRef(); 
        this.music = React.createRef();
        this.review = React.createRef();

    }
   
    /**
     * Set the store's peopleCount
     */
    handlePeopleCount = (count) => {
        this.props.setSetting( {key: 'peopleCount', value: parseInt(count) } );
        scrollToRef(this.personForms);
    }
    

    /**
     * Submit people names to the store
     */
    submitPeopleNames = (people) => {

        this.props.setPeople(people);

        scrollToRef(this.music);

    }
    
    /**
     * Set bonus round
     */
    handleBonusRound = (doBonusRound) => {

        this.props.setSetting( {key: 'doBonusRound', doBonusRound } );

        setTimeout(()=> {
            scrollToRef(this.music);
        }, 0)

    }

    
    /**
     * Set play music option
     */
    handlePlayMusic = (val) => {

        this.props.setSetting( {key: 'musicAnswer', val } );

        setTimeout(()=> {
            scrollToRef(this.review);
        }, 0)

    }
    
    /**
     * Complete the setup
     */
    handleSubmitSetup = () => {
        this.setState({
            setupComplete: true
        });
    }
    
    /**
     * Redirect to get ready after setup is complete
     */
    renderRedirect = () => {
        if (this.state.setupComplete) {
            return <Redirect to='/get-ready' />
        }
    }

    render = () => {
        
        return (
            <div className="main main--setup" ref={this.mainRef}>
                
                <StarBurst />

                <div className="container">
                    <div className="hero">
                        {this.renderRedirect()}
                        <h2>Santa Needs Some Answers</h2>
                         <div className="h1-wrapper">
                                <h1>First, paperwork. Then, party.</h1>
                                </div>
                        
                        <SetupPeopleCounter 
                            submitPeopleCount={this.handlePeopleCount}
                        />

                        <div className="setup-section-anchor" id="person-forms" ref={this.personForms}>
                            <PersonForms
                                peopleCount={this.props.settings.peopleCount}
                                submitPeopleNames={this.submitPeopleNames}
                            />
                        </div>

                        <div className="setup-section-anchor" id="bonus-round" ref={this.bonusRound}>
                            <SetupBonusRound
                                peopleAreSet={ !this.props.people.length ? false : true }
                                handleBonusRound={this.handleBonusRound}
                            />
                        </div>

                        <div className="setup-section-anchor" id="play-music" ref={this.music}>
                            <SetupPlayMusic
                                bonusIsSet={ this.props.settings.doBonusRound === null ? false : true }
                                handlePlayMusic={this.handlePlayMusic}
                            />
                         </div>

                        <div className="setup-section-anchor" id="review" ref={this.review}>
                            <SetupReview
                                submitSetup={this.handleSubmitSetup}
                            />
                        </div>

                     </div>
                 </div>
             </div>
        )
    }
}