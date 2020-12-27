import * as listsAPI from '../api/lists';
import { createPromiseThunk, createPromiseThunkById,
     handleAsyncActions, handleAsyncActionsById, reducerUtils } from '../lib/asyncUtils';
import {
    GET_LIST,
    GET_LISTS,
    GET_LISTS_ERROR,
    GET_LISTS_SUCCESS,
    GET_LIST_ERROR,
    GET_LIST_SUCCESS,
    CLEAR_LIST
    } 
    from './types';

export const getLists = createPromiseThunk(GET_LISTS, listsAPI.getLists);
export const getList = createPromiseThunkById(GET_LIST, listsAPI.getListById);
export const clearList = () => ({ type: CLEAR_LIST });
const initialState={
    lists : reducerUtils.initial(),
    searchlists : reducerUtils.initial(),
    list : {}
}
export default function lists(state = initialState, action) {
    switch(action.type){
        case GET_LISTS:
        case GET_LISTS_SUCCESS:
        case GET_LISTS_ERROR:
            return handleAsyncActions(GET_LISTS,'lists',true)(state,action);
        case GET_LIST:
        case GET_LIST_SUCCESS:
        case GET_LIST_ERROR:
            return handleAsyncActionsById(GET_LIST,'list',true)(state,action);
        case CLEAR_LIST:
            return {
                ...state,
                list:reducerUtils.initial()
            };
        default:
            return state;
    }
}

