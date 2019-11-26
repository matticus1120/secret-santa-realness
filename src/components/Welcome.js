import React, {Component} from 'react';
import axios from 'axios';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Welcome!</h2>
             </div>
        )
    }
}