/**
 * Post Actions
 */

// import { formatPost } from '../utils/storeHelpers.js';

export const SET_SETTING_BEGIN = 'SET_SETTING_BEGIN';
export const SET_SETTING_SUCCESS = 'SET_SETTING_SUCCESS';
export const SET_SETTING_FAILURE = 'SET_SETTING_FAILURE';


/**
 * Set
 */
export const setSettingBegin = () => ({
    type: SET_SETTING_BEGIN
});

export const setSettingFailure = () => ({
    type: SET_SETTING_FAILURE
});

export const setSettingSuccess = setting => ({
    type: SET_SETTING_SUCCESS,
    payload: setting
});


/**
 * Set settings in the store
 */
export function setSetting(payload) {

    return dispatch => {
        
        dispatch(setSettingBegin());

        setTimeout(function(){
			dispatch( setSettingSuccess( payload ));
        }, 0);

    };

}






