const personJabs = [
	"[Name] doesn’t look ready. Check their pulse.",
	"Is a doctor present? I’m worried about [Name].",
	"[Name], do you know where you are?",
	"Somebody should wake up Uncle [Name].",
	"[Name], stand up straight.",
	"[Name], breathe through your nose.",
	"You may need to explain the rules to [Name] again.",
	"[Name], get your finger out of your nose"
]

export  const getJab = (people) => {
	var peopleLength = people.length;
	var randomPersonNumber = Math.floor((Math.random() * peopleLength) + 1) - 1;
	var randomPerson = people[ randomPersonNumber ];
	var randomJabNumber = Math.floor((Math.random() * personJabs.length) + 1) - 1;
	var randomJab = personJabs[ randomJabNumber ];
	var personJab = randomJab.replace('[Name]', randomPerson);
	return personJab;
}

export const getReducedItems = items => {

	let newItems = [...items];
	let randomNumber = Math.floor((Math.random() * newItems.length) + 1) - 1;
	let randomItem = newItems[ randomNumber ];
	newItems.splice( randomNumber, 1 );

	return {
		reducedItems: newItems,
		removedItem: randomItem
	}
	
	// peopleReduced.splice( randomNumber, 1 );
}

/*
var StoreHelpers = {

	// passing the reduced people, get the resulting array of people AND the winner
	getWinnerReducedPeople( peopleReduced ) {

		var peopleLength = peopleReduced.length;
		var randomNumber = Math.floor((Math.random() * peopleLength) + 1) - 1;

		var winner = peopleReduced[ randomNumber ];

		peopleReduced.splice( randomNumber, 1 );

		const winningInfo = {
			peopleReduced: peopleReduced,
			winner: winner
		}

		return winningInfo;

	}

}
module.exports = StoreHelpers;*/