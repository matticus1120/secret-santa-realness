/*
    https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
*/
import { getReducedItems } from '../utils/helpers.js';

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
  currentWinner: null
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
                people: [ ...action.payload ],
                reducedPeople: [ ...action.payload ]
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
            console.log('REDUCE_PEOPLE_SUCCESS');
            var reducedPeople = getReducedItems( state.people );
            return {
                ...state,
                loading: false,
                error: false,
                reducedPeople: reducedPeople.reducedItems,
                currentWinner: reducedPeople.removedItem
            };
        case REDUCE_PEOPLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                
            };
        

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}