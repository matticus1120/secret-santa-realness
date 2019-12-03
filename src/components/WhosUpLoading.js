import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

export default class WhosUpLoading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goToResults: false
        }
    }

	render = () => {
		return (
			<div>Loading....</div>
		)
	}
};
