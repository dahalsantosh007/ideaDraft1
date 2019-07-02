import {LOGINUSERNAME,LOGINPASSWORD} from './types.js';

export function logInUserName(postData){
    return function(dispatch){
        dispatch({
            type: LOGINUSERNAME,
            payload: postData
        })
    }
}

export function logInPassword(postData){
    return function(dispatch){
        dispatch({
            type: LOGINPASSWORD,
            payload: postData
        })
    }
}