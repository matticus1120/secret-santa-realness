import React, {Component} from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StarBurst from './StarBurst';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    getMainContent = () => {
        return (
            <div className="site-main-intro">
                <StarBurst />
                <div className="container">
                    <div className="hero">
                        <h2>Goodbye, hat. So long, tiny papers.<br/ > Hello, the future of gift exchange.</h2>
                        <div className="h1-wrapper">
                            <h1>Welcome to <br /><span>Secret Santa Realness</span></h1>
                            </div>
                        <p> There’s no wrong way to exchange gifts, but there is a right way. That way is this way. Secret Santa Realness is The Internet’s First Ever* Fully Automated Holiday Party Gift-Exchange Name-Generator.</p>
                        <div className="cta-row">
                            <Link to="/instructions" className="btn btn-success btn--big">Let’s Party</Link>
                         </div>
                    </div>
                </div>
             </div>
            ) 
    }

    render() {

        var content = this.getMainContent();

        return (
            <div className="main main--welcome">
            <div className="site-loader-outer">
                    <img className="site-loader" src="https://media.giphy.com/media/KDH9hJ2mSEUYU/source.gif" />
                    <p className="credit">Credit: <a href="https://giphy.com/gifs/santa-christmas-wave-KDH9hJ2mSEUYU" target="_blank">giphy</a></p>
                    </div>
                    {content}
            </div>
        )
    }
}