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
    }

    render() {
        var jab = getJab(this.props.people);
        return (
            <div className="main main--welcome">
                <div className="h1-wrapper">
                        <h1 className="candy-cane">Thanks for using Secret Santa Realness!</h1>
                        <h1 className="faker">Thanks for using Secret Santa Realness!</h1>
                </div>
                <h3> The Internet’s First Ever* Fully Automated Holiday Party Gift-Exchange Name-Generator</h3>
                <p><small><em>*Unverified</em></small></p>
                <p>{jab}</p>
                <div className="all-done-footer">
                  <div className="cta-row">
                    <a className="btn btn--big btn-success" href="#">View the case study</a>
                  </div>
               </div>
               </div>
        )
    }
}