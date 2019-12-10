import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class GetReady extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.setRoutePageview('/get-ready');
    }

    render() {
        return (

          <div className="get-ready">

             <h3>Who’s Up First?</h3>
             
             <img src="/assets/img/loader-santa.gif" />
             <div className="cta-row">
              <Link className="btn btn-success" to='/the-winner'>Click Here to Find Out</Link>
             </div>
          </div>
        );
    }
}

