/**
 * Post Actions
 */

// import { formatPost } from '../utils/storeHelpers.js';

export const SET_GIPHY_BEGIN = 'SET_GIPHY_BEGIN';
export const SET_GIPHY_SUCCESS = 'SET_GIPHY_SUCCESS';
export const SET_GIPHY_FAILURE = 'SET_GIPHY_FAILURE';


/**
 * Set
 */
export const setGiphyBegin = () => ({
    type: SET_GIPHY_BEGIN
});

export const setGiphyFailure = () => ({
    type: SET_GIPHY_FAILURE
});

export const setGiphySuccess = gify => ({
    type: SET_GIPHY_SUCCESS,
    payload: gify
});


/**
 * Set settings in the store
 */
export function setGiphy(payload) {

    return dispatch => {
        
        dispatch(setGiphyBegin());

        if( !payload.tag ) {
            setGiphySuccess( { gif: false, type: payload.type } );
            return;   
        }

        const giphy = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            key: "P4WZK1y0inqnsvkQFPUJ3q1aaTrPFpQS",
            tag: payload.tag,
            type: "random",
            rating: "g"
        }

        let giphyURL = encodeURI(
            giphy.baseURL +
            giphy.type +
            "?api_key=" +
            giphy.key +
            "&tag=" +
            giphy.tag
         );

         return fetch(giphyURL)
            .then(res => {
                return res.json();
            })
            .then((json) => {
                dispatch(setGiphySuccess( { gif: json.data, type: payload.type } )); 
                return json;

            })
            .catch(error => {
                console.log('error', error);
                dispatch(setGiphySuccess(error));
            });

    };

}






