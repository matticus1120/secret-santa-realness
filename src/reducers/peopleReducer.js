/*
    https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
*/

import {
  SET_PEOPLE_BEGIN,
  SET_PEOPLE_SUCCESS,
  SET_PEOPLE_FAILURE,
  REDUCE_PEOPLE_BEGIN,
  REDUCE_PEOPLE_SUCCESS,
  REDUCE_PEOPLE_FAILURE,
   
} from '../actions/peopleActions';

const initialState = {
  people: [],
  reducedPeople: false,
};


export default function postReducer(state = initialState, action) {
    switch (action.type) {

        case SET_PEOPLE_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case SET_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                people: [ ...action.payload ]
            };
        case SET_PEOPLE_FAILURE:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case REDUCE_PEOPLE_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case REDUCE_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            };
        case REDUCE_PEOPLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}