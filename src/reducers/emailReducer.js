import {FULLNAME,CONTACTNUMBER,EMAIL,EMAILBODY} from '../actions/types'

const initialState = {
    fullName: [],
    contactNumber: [],
    email:[],
    emailBody:[]
}

export default function(state = initialState,action){
    switch(action.type){
        case FULLNAME:
            return{
                ...state,
                fullName: action.payload
            }
        case CONTACTNUMBER:
            return{
                ...state,
                contactNumber: action.payload
            }
        case EMAIL:
            return{
                ...state,
                email: action.payload
            }
        case EMAILBODY:
            return{
                ...state,
                emailBody: action.payload
            }
        default:
            return state;
    }
}