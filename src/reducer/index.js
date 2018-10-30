import { combineReducers } from 'redux';
import Contact from './Contact';
const myReducer = combineReducers({
    ContactOut: Contact
});

export default myReducer;