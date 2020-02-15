import TheWinner from '../components/TheWinner.js';
import { connect } from 'react-redux';

import { setReducedPeople } from "../actions/peopleActions";
import { setGiphy } from "../actions/giphyActions";

function mapStateToProps(state, ownProps) {
	return { 
		people: state.people.people,
		reducedPeople: state.people.reducedPeople,
		currentWinner: state.people.currentWinner,
		settings: state.settings.settings,
		giphs: state.giphy.giphs
	};
}

const mapDispatchToProps = (dispatch) => {
  return {

    // send a function as a parament so that you can call it after the action completes
    setReducedPeople: ( callback ) => {
    	
      dispatch(setReducedPeople())
        .then(()=>{
          
          callback();

        });

    },
    setGiphy: (payload) => {
    	dispatch(setGiphy(payload));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TheWinner);