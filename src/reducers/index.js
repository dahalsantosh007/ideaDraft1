import {combineReducers} from 'redux';
import logInReducer from './logInReducer';
import emailReducer from './emailReducer';
import scrollReducer from './scrollReducer';

export default combineReducers({
    logIn : logInReducer,
    email : emailReducer,
    scroll: scrollReducer,
})