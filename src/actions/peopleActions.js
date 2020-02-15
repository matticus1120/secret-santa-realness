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
        }, 0);

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
        
        dispatch( reducePeopleBegin() );

        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                dispatch( reducePeopleSuccess() );
                resolve();
            }, 800);
        });

    };

}



/**
 * The following is a great example for creating promises
 */


// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() * 100 < 90) {
//         console.log('resolving the promise ...');
//         resolve('Hello, Promises!');
//     }
//     reject(new Error('In 10% of the cases, I fail. Miserably.'));
// });

// Two functions 
// const onResolved = (resolvedValue) => console.log(resolvedValue);
// const onRejected = (error) => console.log(error);

// myPromise.then(onResolved, onRejected);

// Same as above, written concisely
// myPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }, (error) => {
//     console.log(error);
// });





