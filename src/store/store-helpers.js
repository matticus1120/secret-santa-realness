var StoreHelpers = {

	testHelpers() {
	},

	/*
	passing the reduced people, get the resulting array of people AND the winner
	 */
	getWinnerReducedPeople( peopleReduced ) {

		console.log('--------');
		console.log('peopleReduced', peopleReduced);

		var peopleLength = peopleReduced.length;
		var randomNumber = Math.floor((Math.random() * peopleLength) + 1) - 1;

		console.log('randomNumber', randomNumber);

		var winner = peopleReduced[ randomNumber ];

		peopleReduced.splice( randomNumber, 1 );

		console.log('peopleReduced', peopleReduced);

		const winningInfo = {
			peopleReduced: peopleReduced,
			winner: winner,
			someWinner: winner
		}


		console.log('--------');

		return winningInfo;

	}

}
module.exports = StoreHelpers;