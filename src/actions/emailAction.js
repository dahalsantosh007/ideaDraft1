import {FULLNAME,CONTACTNUMBER,EMAIL,EMAILBODY} from './types.js';

export function fullNameAction(postData){
    return function (dispatch){
        dispatch({
            type: FULLNAME,
            payload: postData
        })
    }
} 

export function contactNumberAction(postData){
    return function (dispatch){
        dispatch({
            type: CONTACTNUMBER,
            payload: postData
        })
    }
}

export function emailAction(postData){
    return function(dispatch){
        dispatch({
            type: EMAIL,
            payload: postData
        })
    }
}

export function emailBodyAction(postData){
    return function(dispatch){
        dispatch({
            type: EMAILBODY,
            payload: postData
        })
    }
}