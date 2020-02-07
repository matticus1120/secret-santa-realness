/**
 * Post Actions
 */

// import { formatPost } from '../utils/storeHelpers.js';

/* insert */
export const SET_PEOPLE = 'SET_PEOPLE';
export const SET_PEOPLE_REDUCED = 'SET_PEOPLE_REDUCED';
export const SET_SETTINGS = 'SET_SETTINGS';
// export const INSERT_POST_FAILURE = 'INSERT_POST_FAILURE';


/**
 * Insert
 */
export const setPeople = people => ({
    type: SET_PEOPLE,
    payload: people
});

export const setPeopleReduced = () => ({
    type: SET_PEOPLE_REDUCED
});
export const setSettings = settings => ({
    type: SET_SETTINGS,
    payload: settings
});

/*export function insertPost(payload) {

    return dispatch => {
        
        dispatch(insertPostBegin());

        setTimeout(function(){
			dispatch( insertPostSuccess( formatPost( { ...payload, created: Date.now(), edited: Date.now() } ) ) );
        }, 1500);

    };

}


*/



