import React, { Component, useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";

import WhosUpLoading from './WhosUpLoading';

function getSetWinners() {
    // const [state, dispatch] = useReducer(reducer, initialState);
}

export default class TheWinner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            loadingTime: 3000,
            reducedPeople: this.props.reducedPeople,
        }
    }

    componentDidMount = () => {

        setTimeout(()=> {
            
            this.setWinner();

        }, this.state.loadingTime);

    }

    setWinner = () => {
        this.setState({
            loading: false,
        });
        this.props.handleSetWinner();
    }

    hanldeUpNext= () => {
        this.setState({
            loading: true,
        });
        setTimeout(()=> {
            
            this.setWinner();

        }, this.state.loadingTime);
    }

    getWinnerContent = () => {
        var index = this.props.people.length - this.props.reducedPeople.length;
        return (
            <div>
                <h2>The winner is {this.props.winner}</h2>
                <button className="btn btn-success" onClick={this.hanldeUpNext}>Who's up next?</button>
                <p>{index} / {this.props.people.length}</p>
            </div>
        )
    }

    getLoadingContent = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    render() {
        let content = this.state.loading ? this.getLoadingContent() : this.getWinnerContent();
        var divClass = `loading-${this.state.loading}`;
        return (
            <div className={divClass}>
                {content}
             </div>
        )
    }
}