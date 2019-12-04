var StoreHelpers = {

	/*
	passing the reduced people, get the resulting array of people AND the winner
	 */
	getWinnerReducedPeople( peopleReduced ) {

		console.log('peopleReduced', peopleReduced);

		var peopleLength = peopleReduced.length;
		var randomNumber = Math.floor((Math.random() * peopleLength) + 1) - 1;

		var winner = peopleReduced[ randomNumber ];

		peopleReduced.splice( randomNumber, 1 );

		const winningInfo = {
			peopleReduced: peopleReduced,
			winner: winner
		}

		console.log('winningInfo', winningInfo);
		
		return winningInfo;

	}

}
module.exports = StoreHelpers;