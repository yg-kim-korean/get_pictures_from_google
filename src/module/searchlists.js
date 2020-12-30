
import * as searchresultAPI from '../api/searchresult';
import {  createPromiseThunkBySearch,
     handleAsyncActions,  reducerUtils } from '../lib/asyncUtils';
import {
    GET_SEARCH_LISTS,
    GET_SEARCH_LISTS_SUCCESS,
    GET_SEARCH_LISTS_ERROR,
    CLEAR_SEARCH_LIST,
    CLEAR_IMAGE_LIST2
    } 
    from './types';

export const getSearchList = createPromiseThunkBySearch(GET_SEARCH_LISTS, searchresultAPI.get_data_list);
export const clearSearchList = () => ({ type: CLEAR_SEARCH_LIST });
export const clearImageListFromAxios = () => ({ type: CLEAR_IMAGE_LIST2 });
const initialState={
    searchlists : reducerUtils.initial(),
}
export default function lists(state = initialState, action) {
    switch(action.type){
        case GET_SEARCH_LISTS:
        case GET_SEARCH_LISTS_ERROR:
        case GET_SEARCH_LISTS_SUCCESS:
            return handleAsyncActions(GET_SEARCH_LISTS,'searchlists',true)(state,action);

        case CLEAR_SEARCH_LIST:
            return {
                ...state,
                searchlists:reducerUtils.initial()
            };
        case CLEAR_IMAGE_LIST2:
            return {
                ...state,
                searchlists:reducerUtils.initial()
            };
            
        default:
            return state;
    }
}

