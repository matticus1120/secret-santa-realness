import React, {Component} from 'react';

import { Link } from "react-router-dom";

export default class WhosUp extends Component {

    render() {
        return (
        <div>
            <h2>Whos Up First?</h2>
            <Link to="/the-winner" className="btn btn-success" onClick={this.findOut}>Find out!</Link>
         </div>
        )
    }
}