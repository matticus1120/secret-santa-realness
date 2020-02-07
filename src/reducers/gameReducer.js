/*
    https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/
*/

import {
    // insert
    SET_PEOPLE,
    SET_SETTINGS, // MOST OF THE GAME'S SETTINGS
   
} from '../actions/gameActions';

const initialState = {
  // peopleCount: 0, // should use in local props
  people: [],
  peopleAreSet: false,
  readyForReview: false,
  doBonusRound: false,
  bonusIsSet: false,
  setupComplete: false,
  musicIsSet: false,
  musicAnswer: false,
};

/*

MAYBE USE A HELPER FUNCTION HERE
 
const updatePost = (posts, post) => {
    return posts.map((item) => {
        return  item.id === post.id ? {...post} : item;
    });
}
*/

export default function postReducer(state = initialState, action) {
    switch (action.type) {

		// insert
        case SET_PEOPLE:
            return {
                ...state,
                loading: true,
                error: false
            };
        case SET_SETTINGS:
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