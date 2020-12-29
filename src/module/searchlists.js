import * as listsAPI from '../api/lists';
import * as searchresultAPI from '../api/searchresult';
import {  createPromiseThunkById,createPromiseThunkBySearch,
     handleAsyncActions, handleAsyncActionsById, reducerUtils } from '../lib/asyncUtils';
import {
    GET_LIST,
    // GET_LISTS,
    // GET_LISTS_ERROR,
    // GET_LISTS_SUCCESS,
    GET_LIST_ERROR,
    GET_LIST_SUCCESS,
    GET_SEARCH_LISTS,
    GET_SEARCH_LISTS_SUCCESS,
    GET_SEARCH_LISTS_ERROR,
    CLEAR_SEARCH_LIST
    } 
    from './types';

// export const getLists = createPromiseThunk(GET_LISTS, listsAPI.getLists);
export const getList = createPromiseThunkById(GET_LIST, listsAPI.getListById);
export const getSearchList = createPromiseThunkBySearch(GET_SEARCH_LISTS, searchresultAPI.get_data_list);
export const clearSearchList = () => ({ type: CLEAR_SEARCH_LIST });
const initialState={
    // lists : reducerUtils.initial(),
    searchlists : reducerUtils.initial(),
    list : {}
}
export default function lists(state = initialState, action) {
    switch(action.type){
        // case GET_LISTS:
        // case GET_LISTS_SUCCESS:
        // case GET_LISTS_ERROR:
        //     return handleAsyncActions(GET_LISTS,'lists',true)(state,action);
        case GET_SEARCH_LISTS:
        case GET_SEARCH_LISTS_ERROR:
        case GET_SEARCH_LISTS_SUCCESS:
            return handleAsyncActions(GET_SEARCH_LISTS,'searchlists',true)(state,action);
        case GET_LIST:
        case GET_LIST_SUCCESS:
        case GET_LIST_ERROR:
            return handleAsyncActionsById(GET_LIST,'list',true)(state,action);
        case CLEAR_SEARCH_LIST:
            return {
                ...state,
                list:reducerUtils.initial()
            };
        default:
            return state;
    }
}

