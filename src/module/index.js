import { combineReducers } from "redux";
import lists from './lists';
import searchword from './searchword';

const rootReducer =  combineReducers({lists,searchword});

export default rootReducer