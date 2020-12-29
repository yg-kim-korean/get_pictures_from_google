import { combineReducers } from "redux";
import searchlists from './searchlists';
import searchword from './searchword';
import imagelists from './imagelists'

const rootReducer =  combineReducers({searchlists,searchword,imagelists});

export default rootReducer