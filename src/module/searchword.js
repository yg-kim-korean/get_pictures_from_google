import {SET_SEARCH_WORD} from './types';

import setsearchword from '../api/setsearchword'
import { handleSetSearchWord,setSearchWord } from '../lib/asyncUtils';
const initialState={
    searchword:''
}

export const settingSearchWord = setSearchWord(SET_SEARCH_WORD,setsearchword);

export default function searchword(state = initialState, action) {
    switch(action.type){
        case SET_SEARCH_WORD:
            return handleSetSearchWord(SET_SEARCH_WORD,'searchword',true)(state,action);
        default:
            return state;
    }       
}
