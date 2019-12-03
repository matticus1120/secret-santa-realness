import StoreHelpers from '../store-helpers';

var people = localStorage.getItem("people") ? JSON.parse(localStorage.getItem("people")) : [];
var reducedPeople = localStorage.getItem("people") ? JSON.parse(localStorage.getItem("people")) : [];
console.log('setting again');

export var initialState = {
    people: [],
    reducedPeople: [],
    winner: null
};


export const reducer = (state, action) => {
    switch (action.type) {

    		// used when either:
	    		// ompleting the set up
	    		// loading the app from other pages, using the localStorage object
        case "SET_GAME_VALUES":
            
            initialState.people = action.payload.people;
            initialState.reducedPeople = action.payload.people;

            // appStore.people = action.payload.people;
            // appStore.reducedPeople = action.payload.people;

            const json = JSON.stringify(initialState.people);

            localStorage.setItem("people", json);

            console.log('initialState', initialState);

            return {
                ...state,
                people: action.payload
            };

        case "SET_WINNER":

            let winningInfo = StoreHelpers.getWinnerReducedPeople(initialState.reducedPeople);
            initialState.winner = winningInfo.winner;
            initialState.reducedPeople = winningInfo.peopleReduced;

            return {
                ...state
            };
       
        default:
            return state;
    }
};