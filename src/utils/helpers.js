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
