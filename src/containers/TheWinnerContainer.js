import TheWinner from '../components/TheWinner.js';
import { connect } from 'react-redux';

import { setReducedPeople } from "../actions/peopleActions";

function mapStateToProps(state, ownProps) {
	return { 
		people: state.people.people,
		reducedPeople: state.people.reducedPeople,
		currentWinner: state.people.currentWinner,
		settings: state.settings.settings
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setReducedPeople: () => {
    	dispatch(setReducedPeople());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TheWinner);