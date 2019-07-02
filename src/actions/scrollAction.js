import {SCROLLACTION} from './types';

export function scrollAction(postdata){
    return function (dispatch){
        dispatch({
            type: SCROLLACTION,
            payload: postdata
        })
    }
}