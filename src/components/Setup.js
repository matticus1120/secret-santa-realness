import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import SetupPeopleCounter from './setup/SetupPeopleCounter';
import SetupPersonInput from './setup/SetupPersonInput';
import SetupBonusRound from './setup/SetupBonusRound';
import SetupReview from './setup/SetupReview';
import SetupPlayMusic from './setup/SetupPlayMusic';

import StarBurst from './StarBurst';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) ;

export default class Setup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
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
        /*setTimeout(()=>{
            scrollToRef(this.mainRef);
        }, 300);*/
    }

    componentDidMount = () => {
        // this.props.setRoutePageview('/setup');
    }
    
    /**
     * Set the store's peopleCount
     */
    handlePeopleCount = (count) => {
        this.props.setSetting( {key: 'peopleCount', value: parseInt(count) } );
        scrollToRef(this.personForms);
    }
    
    /**
     * Set the persons name one at a time
     */
    setPersonName = (personName, personIndex) => {
        
        let newPeople = this.state.people;
        newPeople[personIndex] = personName;

        this.setState({ 
           people: [ ...newPeople ]
        });

    }

    /**
     * Submit people names to the store
     */
    submitPeopleNames = () =>{

        if( !this.state.people.length ) {
            alert('Set names first!');
            return;
        }

        // this.props.setSetting( {key: 'peopleAreSet', value: true } );   
        this.props.setPeople(this.state.people);

        setTimeout(()=> {
            scrollToRef(this.music);
        }, 400);

    }
    
    /**
     * Set bonus round
     */
    handleBonusRound = (doBonusRound) => {

        this.props.setSetting( {key: 'doBonusRound', doBonusRound } );

        setTimeout(()=> {
            scrollToRef(this.music);
        }, 400)

    }


    handlePlayMusic = (val) => {

        this.props.setSetting( {key: 'musicAnswer', val } );

        setTimeout(()=> {
            scrollToRef(this.review);
        }, 400)

    }
    

    getPersonForms() {
        
        let peopleForms = [];
        
        if( this.props.settings.peopleCount > 0 ) {
            
            for( let i = 0; i < this.props.settings.peopleCount; i ++ ) {
                
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

    handleSubmitSetup = () => {
        this.setState({
            setupComplete: true
        });
        let tempState = this.state;

        console.log('tempState', tempState);
        // tempState.allPeople = tempState.people;
        // this.props.handleSetupSubmit( this.state );
        
        // this.props.setPersonName( tempState );
    }

    renderRedirect = () => {
        if (this.state.setupComplete) {
            return <Redirect to='/get-ready' />
      }
    }

    render = () => {
        
        var personForm = this.getPersonForms();

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
                        {personForm}
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