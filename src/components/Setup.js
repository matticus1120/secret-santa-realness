import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';




import { initialState, reducer } from "../store/reducer";

import SetupPeopleCounter from './SetupPeopleCounter';
import SetupPersonInput from './SetupPersonInput';
import SetupBonusRound from './SetupBonusRound';
import SetupReview from './SetupReview';
import SetupPlayMusic from './SetupPlayMusic';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) ;

export default class Setup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleCount: 0,
            people: [],
            peopleAreSet: false,
            readyForReview: false,
            doBonusRound: false,
            bonusIsSet: false,
            setupComplete: false,
            musicIsSet: false,
            musicAnswer: false
        }

        this.mainRef = React.createRef();
        this.personForms = React.createRef();
        this.bonusRound = React.createRef(); 
        this.music = React.createRef();
        this.review = React.createRef();


    }
    componentDidMount = () => {
        setTimeout(()=>{
            scrollToRef(this.mainRef);
        }, 300);
    }

    handlePeopleCount = (count) => {
        this.setState({ peopleCount: parseInt(count) });

        setTimeout(()=> {
            scrollToRef(this.personForms);
        }, 400)
    }
    
    setPersonName = (personName, personIndex) => {
        var people = this.state.people;
        people[personIndex] = personName;
        this.setState({ people: people });
    }

    handlePlayMusic = (val) => {

        this.setState({
            musicAnswer: val,
            musicIsSet: true,
            readyForReview: true
        });

        setTimeout(()=> {
            scrollToRef(this.review);
        }, 400)

    }

    submitPeopleNames = () =>{
        if( !this.state.people.length ) {
            return;
        }
        this.setState({
            peopleAreSet: true
        });
        setTimeout(()=> {
            scrollToRef(this.music);
        }, 400)
    }

    getPersonForms() {
        var peopleForms = [];
        if( this.state.peopleCount > 0 ) {
            for( var i = 0; i < this.state.peopleCount; i ++ ) {
                
                peopleForms.push(
                    <SetupPersonInput 
                        key={i}
                        personIndex={i}
                        setPersonName={this.setPersonName}
                    />
                );

            }


            return (
                <div className="setup-section">
                    <div className="people-form">
                        <label>Legal First Names of Participants</label>
                        <div className="people-form__inputs">
                            {peopleForms}
                        </div>
                        <div className="people-form__footer">
                            <p><small><em>If two participants share a legal first name, please also enter the first initial of their last names. If two participants share a legal first name and the first initial of their last names, please enter ‘Stretch’ as the name of the taller participant.</em></small></p>
                            <div className="cta-row">
                            <input onClick={this.submitPeopleNames} className="btn btn-success" type="submit" value="Next" />
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
    }

    handleBonusRound = (doBonusRound) => {

        this.setState({
            doBonusRound: doBonusRound,
            bonusIsSet: true
            // readyForReview: true
        });

        setTimeout(()=> {
            scrollToRef(this.music);
        }, 400)

    }

    handleSubmitSetup = () => {
        this.setState({
            setupComplete: true
        })
        this.props.handleSetupSubmit( this.state );
    }

    renderRedirect = () => {
        if (this.state.setupComplete) {
            return <Redirect to='/get-ready' />
      }
    }

    render = () => {
        
        var personForm = this.getPersonForms();
        /*this.personForms = React.createRef();
        this.bonusRound = React.createRef(); 
        this.bonusRound = React.createRef();
        this.review = React.createRef();*/

        return (
            <div className="main main--welcome" ref={this.mainRef}>
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
                    {personForm}
                </div>

                <div className="setup-section-anchor" id="bonus-round" ref={this.bonusRound}>
                    <SetupBonusRound
                        peopleAreSet={this.state.peopleAreSet}
                        handleBonusRound={this.handleBonusRound}
                    />
                    </div>

                <div className="setup-section-anchor" id="play-music" ref={this.music}>
                    <SetupPlayMusic
                        bonusIsSet={this.state.bonusIsSet}
                        handlePlayMusic={this.handlePlayMusic}
                    />
                    </div>

                <div className="setup-section-anchor" id="review" ref={this.review}>
                    <SetupReview
                        readyForReview={this.state.readyForReview}
                        submitSetup={this.handleSubmitSetup}
                        setupValues={this.state}
                    />
                </div>

             </div>
             </div>
        )
    }
}