import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getJab } from "../../utils/helpers.js";

class SetupReview extends Component {


	render() {
		
		if( this.props.settings.musicAnswer === null ) return '';

		let bonusRoundString = this.props.settings.doBonusRound ? `You are doing a bonus round.` : `Fine, no bonus round.`;
		let musicString =  this.props.settings.musicAnswer !== 'no' ? "Play some (funky) music.": "Silence is golden.";

		var jab = getJab(this.props.people);

		return (
			<div className="setup-section setup-section--review">
				<h2>Are you a liar?</h2>
				<h4>Or is this information correct?</h4>

				<div className="form-review">
					<p className="players"><strong>The Players:<br /></strong> Are <em>{this.props.people.join(', ')}</em> ready to party?</p>
					<p className="bonus"><strong>Bonus round?<br /></strong> {bonusRoundString}</p>
					<p className="music"><strong>Play some music?<br /></strong> {musicString}</p>
					<p className="jab"><strong>{jab}</strong></p>
				</div>

				
				<label>Are you ready to...</label>
				
				<div className="cta-row">
					<button className="btn btn-success" onClick={this.props.submitSetup}>Party?!!</button>
				</div>

			</div>

		);
	} 
};


function mapStateToProps(state, ownProps) {
	return {
		settings: state.settings.settings,
		people: state.people.people,
	};
}

export default connect(mapStateToProps)(SetupReview);