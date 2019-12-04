import React, {Component} from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main main--welcome">
                <div className="hero">
                    <h2>Goodbye, hat. So long, tiny papers. Hello, the future of gift exchange.</h2>
                    <div className="h1-wrapper">
                        <h1 class="candy-cane">Welcome to <br /><span>Secret Santa Realness</span></h1>
                        <h1 className="faker">Welcome to <br /><span>Secret Santa Realness</span></h1>
                        </div>
                    <p> There’s no wrong way to exchange gifts, but there is a right way. That way is this way. Secret Santa Realness is The Internet’s First Ever* Fully Automated Holiday Party Gift-Exchange Name-Generator.</p>
                    <div className="cta-row">
                        <Link to="/instructions" className="btn btn-success btn--big">Let’s Party</Link>
                     </div>
                </div>
             </div>
        )
    }
}