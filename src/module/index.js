import { combineReducers } from "redux";
import searchlists from './searchlists';
import searchword from './searchword';
import imagelists from './imagelists';
import setnowpage from './setnowpage'

const rootReducer =  combineReducers({searchlists,searchword,imagelists,setnowpage});

export default rootReducer