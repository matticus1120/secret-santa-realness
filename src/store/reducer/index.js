var people = localStorage.getItem("people") ?  JSON.parse( localStorage.getItem("people") ): [];

export var initialState = {
  people: people,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_VALUES":
      initialState.people = action.payload.people;
      const json = JSON.stringify( initialState.people );
      localStorage.setItem("people", json);
      return {
        ...state,
        people: action.payload
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
