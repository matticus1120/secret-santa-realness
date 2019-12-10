import React, {Component} from 'react';
import axios from 'axios';

const personJabs = [
  "[Name] doesn’t look ready. Check their pulse.",
  "Is a doctor present? I’m worried about [Name].",
  "[Name], do you know where you are?",
  "Somebody should wake up Uncle [Name].",
  "[Name], stand up straight.",
  "[Name], breathe through your nose.",
  "You may need to explain the rules to [Name] again.",
  "[Name], get your finger out of your nose"
]

  const getJab = (people) => {
    var peopleLength = people.length;
    var randomPersonNumber = Math.floor((Math.random() * peopleLength) + 1) - 1;
    var randomPerson = people[ randomPersonNumber ];
    var randomJabNumber = Math.floor((Math.random() * personJabs.length) + 1) - 1;
    var randomJab = personJabs[ randomJabNumber ];
    var personJab = randomJab.replace('[Name]', randomPerson);
    return personJab;
  }

  

export default class AllDone extends Component {

    constructor(props) {
        super(props);
        // console.log('props', props);
        var jsonPeople = localStorage.getItem("people");
        console.log('jsonPeople', jsonPeople);
        var allPeople = JSON.parse(jsonPeople);
        console.log('allPeople', allPeople);
        this.state = {
          people: allPeople
        }
    }

    componentDidMount = () => {
      console.log(this.props);
    }

    render() {
        var jab = getJab(this.state.people);
        return (
            <div className="main main--review all-done">
              <div className="hero hero--all-done">
                  <div className="h1-wrapper">
                      <h1>Thanks for using <br />Secret Santa Realness!</h1>
                  </div>
                  <p> The Internet’s First Ever* Fully Automated Holiday Party Gift-Exchange Name-Generator <br /><br />
                  <small><em>*Unverified</em></small> </p>
                  </div>
                
                <p className="all-done__jab">{jab}</p>
                <div className="all-done__footer">
                  <div className="cta-row">
                    <a className="btn btn--big btn-success" target="_blank" href="https://blackjet.ca/santa/?utm_source=website&utm_medium=cta&utm_campaign=secret-santa">Watch the making of!</a>
                  </div>
                  <h3 className="all-done__credit">Brought you you by <a target="_blank" href="https://blackjet.ca/?utm_source=website&utm_medium=cta&utm_campaign=secret-santa">Blackjet</a></h3>
               </div>
            </div>
        )
    }
}