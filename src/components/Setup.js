import React, {Component} from 'react';
import axios from 'axios';

import { initialState, reducer } from "../store/reducer";

import PeopleCounter from './PeopleCounter';
import PersonInput from './PersonInput';

export default class Setup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleCount: 0,
            people: []
        }
    }

    handlePeopleCount = (count) => {
        this.setState({ peopleCount: parseInt(count) });
    }
    handlePeopleNames = () => {
        // this.setState({ peopleCount: parseInt(count) });
    }

    getPersonForms() {
        var peopleForms = [];
        if( this.state.peopleCount > 0 ) {
            for( var i = 0; i < this.state.peopleCount; i ++ ) {
                
                peopleForms.push(
                    <PersonInput 
                        key={i}
                        personIndex={i}
                    />
                );

            }
        
            return (
                <div className="people-form">
                    <div className="people-form__inputs">
                        {peopleForms}
                    </div>
                    <div className="people-form__footer">
                        <input onClick={this.handlePeopleNames} className="btn btn-success" type="submit" value="Next" />
                    </div>
                </div>
            );

        }
    }

    render() {
        var personForm = this.getPersonForms();
        return (
            <div>
                <h2>Setup!</h2>
                <PeopleCounter 
                    submitPeopleCount={this.handlePeopleCount}
                />
                {personForm}
             </div>
        )
    }
}