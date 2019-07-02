import {SCROLLACTION} from '../actions/types';

const initialState = {
    className : []
}

export default function(state = initialState,action){
    switch(action.type){
        case SCROLLACTION:
            return{
                ...state,
                className: action.payload
            }
        default:
            return state;
    }
}