import React, {Component} from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import StarBurst from './StarBurst';
export default class Instructions extends Component {

    componentDidMount = () => {
        this.props.setRoutePageview('/instructions');
    }

    render() {
        return (
            <div className="main main--instructions">
            <StarBurst />
                <div className="hero">
                <h2>How does it work? Read on.</h2>
                <div className="h1-wrapper">
                        <h1>How it Works</h1>
                        </div>
                <p>Yankee Swap, White Elephant and to a lesser extent Gifty Stealy, Secret Santa goes by many names, but the rules remain the same.</p>
                <ol>
<li>Participants place wrapped gifts, such as novelty glassware or beef jerky, in a designated Gift Pile.</li>
<li>Participants use the Secret Santa Realness name-generator to determine who will go first. </li>
<li>The participant whose name is generated first takes a gift from the pile and unwraps it.</li>
<li>The next participant can choose to either steal the first participant’s gift or unwrap a new one. If the second participant steals from the first participant, the first participant must unwrap a new gift.</li>
<li>The next participant can steal any open gift or unwrap a new one. If they steal, the participant they stole from can similarly steal or open a new gift and so on.</li>
<li>The exchange continues until every gift has been unwrapped.</li>
<li>Participants can also opt-in for a bonus round, in which everyone is given another chance to steal a gift and ruin someone’s holiday.  </li>
</ol>

<div className="cta-row">
<Link to="/setup" className="btn btn-success">We Understand, Can We Party Now?</Link>
</div>
             </div>
             </div>
        )
    }
}