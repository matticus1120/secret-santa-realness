import React, { Component, useReducer, useEffect } from "react";
import { initialState, reducer } from "../store/reducer";

import WhosUpLoading from './WhosUpLoading';

function getSetWinners() {
    // const [state, dispatch] = useReducer(reducer, initialState);
}

export default class TheWinner extends Component {

    constructor(props) {
        super(props);
        // console.log('props', props);
        this.state = {
            loading: true,
            loadingTime: 3000,
            reducedPeople: [],
            winner: false
        }
    }

    componentDidMount = () => {

        console.log('componentDidMount', this.props);
            this.setState({
                reducedPeople: this.props.reducedPeople,
                people: this.props.people,
            })

        setTimeout(()=> {
            
            this.setWinner();

        }, this.state.loadingTime);

    }

    componentDidUpdate =(props) => {
        console.log('props', props);
        if( props.reducedPeople.length != this.state.reducedPeople.length ) {
            this.setState({
                reducedPeople: props.reducedPeople,
                winner: props.winner
            })
        }
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

        // var index = this.state.people.length - this.state.reducedPeople.length;
        if( !this.state.reducedPeople.length ) {
            return <div><h2>That's all!</h2></div>
        }
        return (
            <div>
                <h2>The winner is {this.state.winner}</h2>
                <button className="btn btn-success" onClick={this.hanldeUpNext}>Who's next?</button>
                {/*<p>{index} / {this.props.people.length}</p>*/}
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
        return (
            <div>
                {content}
             </div>
        )
    }
}