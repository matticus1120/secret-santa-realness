/*
    https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
*/

import {
    SET_GIPHY_BEGIN,
    SET_GIPHY_SUCCESS,
    SET_GIPHY_FAILURE,
   
} from '../actions/giphyActions';

const initialState = {
  giphs: {
    loadingGif: null,
    winnerGif: null,
  }, 
  loading: false,
  error: false
};


export default function giphyReducer(state = initialState, action) {
    switch (action.type) {

        case SET_GIPHY_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case SET_GIPHY_SUCCESS:
            console.log('action.payload', action.payload);
            console.log('state.gifs', state.gifs);
            var newgiphs = {...state.giphs, [action.payload.type]: action.payload.gif };
            console.log('newgiphs', newgiphs);
            return {
                ...state,
                loading: false,
                error: false,
                giphs: {...state.giphs, [action.payload.type]: action.payload.gif }
            };
        case SET_GIPHY_FAILURE:
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