var StoreHelpers = {

	testHelpers() {
	},

	/*
	passing the reduced people, get the resulting array of people AND the winner
	 */
	getWinnerReducedPeople( peopleReduced ) {

		var peopleLength = peopleReduced.length;
		var randomNumber = Math.floor((Math.random() * peopleLength) + 1) - 1;

		var winner = peopleReduced[ randomNumber ];

		peopleReduced.splice( randomNumber, 1 );

		var winningInfo = {
			peopleReduced: peopleReduced,
			winner: winner
		}

		return winningInfo;

	}

}
module.exports = StoreHelpers;