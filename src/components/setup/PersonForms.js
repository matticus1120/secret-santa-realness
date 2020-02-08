import React from 'react';
import SetupPersonInput from './SetupPersonInput';

export default class PersonForms extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
            people: []
        }

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
	 * Submit all names to setup
	 */
    submitPeopleNames = () => {
		this.props.submitPeopleNames(this.state.people);
    }

	render() {
		
		if( !this.props.peopleCount ) return <div></div>
		
		let peopleForms = [];

        for( let i = 0; i < this.props.peopleCount; i ++ ) {
            
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