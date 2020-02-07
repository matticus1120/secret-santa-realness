import Setup from '../components/Setup.js';
import { connect } from 'react-redux';

import { setSetting } from "../actions/settingsActions";

function mapStateToProps(state, ownProps) {
	return {
		people: state.people,
		settings: state.settings
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSetting: (values) => {
    	dispatch(setSetting(values));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);