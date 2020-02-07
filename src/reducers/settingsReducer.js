/*
    https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
*/

import {
    // insert
    SET_SETTING_BEGIN,
    SET_SETTING_SUCCESS,
    SET_SETTING_FAILURE,
   
} from '../actions/settingsActions';

const initialState = {
  settings: {
    peopleCount: 0,
    peopleAreSet: false,
    readyForReview: false,
    doBonusRound: false,
    bonusIsSet: false,
    setupComplete: false,
    musicIsSet: false,
    musicAnswer: false,
   }, 
  loading: false,
  error: false
};


export default function postReducer(state = initialState, action) {
    switch (action.type) {

        case SET_SETTING_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case SET_SETTING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                settings: {...state.settings, [action.payload.key]: action.payload.value }
            };
        case SET_SETTING_FAILURE:
            return {
                ...state,
                loading: false,
                error: false
            };
        

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}