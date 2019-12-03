import React, {Component} from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";

// import WhosUpLoading from './WhosUpLoading';

export default class WhosUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h2>Whos Up First?</h2>
            <Link to="/the-winner" className="btn btn-success" onClick={this.findOut}>Find out!</Link>
         </div>
        )
    }
}