/**
 * Post Actions
 */



// set people
export const SET_PEOPLE_BEGIN = 'SET_PEOPLE_BEGIN';
export const SET_PEOPLE_SUCCESS = 'SET_PEOPLE_SUCCESS';
export const SET_PEOPLE_FAILURE = 'SET_PEOPLE_FAILURE';

// reduce people
export const REDUCE_PEOPLE_BEGIN = 'REDUCE_PEOPLE_BEGIN';
export const REDUCE_PEOPLE_SUCCESS = 'REDUCE_PEOPLE_SUCCESS';
export const REDUCE_PEOPLE_FAILURE = 'REDUCE_PEOPLE_FAILURE';

/**
 * Set
 */
export const setPeopleBegin = () => ({
    type: SET_PEOPLE_BEGIN
});

export const setPeopleFailure = () => ({
    type: SET_PEOPLE_FAILURE
});

export const setPeopleSuccess = people => ({
    type: SET_PEOPLE_SUCCESS,
    payload: people
});


/**
 * Set people in the store
 */
export function setPeople(payload) {

    return dispatch => {
        
        dispatch(setPeopleBegin());

        setTimeout(function(){
			dispatch( setPeopleSuccess( payload ));
        }, 1500);

    };

}


/**
 * Reduce
 */
export const reducePeopleBegin = () => ({
    type: REDUCE_PEOPLE_BEGIN
});

export const reducePeopleFailure = () => ({
    type: REDUCE_PEOPLE_FAILURE
});

export const reducePeopleSuccess = reducedPeople => ({
    type: REDUCE_PEOPLE_SUCCESS
});


/**
 * Reduce People Action
 */
export function setReducedPeople(payload) {

    return dispatch => {
        
        dispatch(reducePeopleBegin());

        setTimeout(function(){
            dispatch( reducePeopleSuccess(  ));
        }, 1500);

    };

}






