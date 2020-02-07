import Welcome from '../components/Welcome.js';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
	return { 
		people: state.people
	};
}

export default connect(mapStateToProps)(Welcome);