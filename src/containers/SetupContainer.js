import Setup from '../components/Setup.js';
import { connect } from 'react-redux';

import { setSetting } from "../actions/settingsActions";
import { setPeople } from "../actions/peopleActions";

function mapStateToProps(state, ownProps) {
	return {
		people: state.people.people,
		settings: state.settings.settings
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSetting: (values) => {
    	dispatch(setSetting(values));
    },
    setPeople: (people) => {
    	dispatch(setPeople(people));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);