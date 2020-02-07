import GetReady from '../components/GetReady.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
	return { 
		people: state.people
	};
}

export default connect(mapStateToProps)(GetReady);