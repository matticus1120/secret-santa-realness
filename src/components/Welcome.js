import React, {Component} from 'react';
// import axios from 'axios';
import { BrowserRouter as Link } from "react-router-dom";

import StarBurst from './StarBurst';

export default class Welcome extends Component {

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
                        <p><small><em>* unverified</em></small></p>
                        <div className="cta-row">
                            <Link to="/setup" className="btn btn-success btn--big">Let’s Party</Link>
                         </div>
                         <div className="cta-legal">
                         <p>Or do you   <Link to="/instructions" >Need some instructions?</Link></p>
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
                    <img className="site-loader" src="https://media.giphy.com/media/KDH9hJ2mSEUYU/source.gif" alt="Site Loader" />
                    <p className="credit">Img Credit: <a href="https://giphy.com/gifs/santa-christmas-wave-KDH9hJ2mSEUYU" rel="noopener noreferrer" target="_blank">giphy</a></p>
                    </div>
                    {content}
            </div>
        )
    }
}