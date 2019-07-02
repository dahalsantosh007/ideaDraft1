import {LOGINUSERNAME,LOGINPASSWORD} from '../actions/types.js';

const initialState = {
    logInUserName:[],
    logInPassword:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case LOGINUSERNAME:
            return{
                ...state,
                logInUserName: action.payload
            }
        case LOGINPASSWORD:
            return{
                ...state,
                logInPassword: action.payload
            }
        default:
            return state;
    }
}