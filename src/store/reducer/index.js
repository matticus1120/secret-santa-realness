export var initialState = {
  people: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_VALUES":
      initialState.people = action.payload.people;
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
