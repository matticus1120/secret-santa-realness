import StoreHelpers from '../store-helpers';

StoreHelpers.testHelpers();

var people = localStorage.getItem("people") ? JSON.parse(localStorage.getItem("people")) : [];
var reducedPeople = localStorage.getItem("people") ? JSON.parse(localStorage.getItem("people")) : [];

export var initialState = {
    people: people,
    reducedPeople: reducedPeople,
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

            const json = JSON.stringify(initialState.people);

            localStorage.setItem("people", json);

            return {
                ...state,
                people: action.payload
            };

        case "SET_WINNER":

            let winningInfo = StoreHelpers.getWinnerReducedPeople(initialState.reducedPeople);

            initialState.winner = winningInfo.winner;
            initialState.reducedPeople = winningInfo.peopleReduced;

            return {
                ...initialState
            };
        case "ADD_PEOPLE":
            return {
                ...state,
                people: action.payload
            };
        default:
            return state;
    }
};