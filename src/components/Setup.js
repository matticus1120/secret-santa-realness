import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


import { initialState, reducer } from "../store/reducer";

import SetupPeopleCounter from './SetupPeopleCounter';
import SetupPersonInput from './SetupPersonInput';
import SetupBonusRound from './SetupBonusRound';
import SetupReview from './SetupReview';

export default class Setup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleCount: 0,
            people: [],
            peopleAreSet: false,
            readyForReview: false,
            doBonusRound: false,
            setupComplete: false
        }
    }

    handlePeopleCount = (count) => {
        this.setState({ peopleCount: parseInt(count) });
    }
    
    setPersonName = (personName, personIndex) => {
        var people = this.state.people;
        people[personIndex] = personName;
        this.setState({ people: people });
    }

    submitPeopleNames = () =>{
        if( !this.state.people.length ) {
            return;
        }
        this.setState({
            peopleAreSet: true
        })
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
                <div className="people-form">
                    <div className="people-form__inputs">
                        {peopleForms}
                    </div>
                    <div className="people-form__footer">
                        <input onClick={this.submitPeopleNames} className="btn btn-success" type="submit" value="Next" />
                    </div>
                </div>
            );

        }

    }

    handleBonusRound = (doBonusRound) => {

        this.setState({
            doBonusRound: doBonusRound,
            readyForReview: true
        });
        
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

        return (
            <div>
                {this.renderRedirect()}
                <h2>Setup!</h2>
                
                <SetupPeopleCounter 
                    submitPeopleCount={this.handlePeopleCount}
                />

                {personForm}

                <SetupBonusRound
                    peopleAreSet={this.state.peopleAreSet}
                    handleBonusRound={this.handleBonusRound}
                />

                <SetupReview
                    readyForReview={this.state.readyForReview}
                    submitSetup={this.handleSubmitSetup}
                    setupValues={this.state}
                />

             </div>
        )
    }
}