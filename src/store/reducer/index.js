export const initialState = {
  loading: true,
  people: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PEOPLE_COUNT":
      return {
        ...state,
        people: action.payload
      };
    case "ADD_PEOPLE":
      return {
        ...state,
        people: action.payload
      };
    case "UPDATE_PEOPLE":
      return {
        ...state,
        people: action.payload
      };
    default:
      return state;
  }
};
