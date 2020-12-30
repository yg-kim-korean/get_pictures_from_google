import { get_image_list} from '../api/searchresult';
import { createPromiseThunkBySearch, handleAsyncActions, reducerUtils } from '../lib/asyncUtils';
import {
    GET_IMAGE_LISTS,
    GET_IMAGE_LISTS_ERROR,
    GET_IMAGE_LISTS_SUCCESS,
    CLEAR_IMAGE_LIST} from './types'


export const getImageLists = createPromiseThunkBySearch(GET_IMAGE_LISTS, get_image_list);
export const clearImageList = () => ({ type: CLEAR_IMAGE_LIST });
const initialState={
    imagelists: reducerUtils.initial()
}
export default function imagelists(state = initialState, action){
    switch(action.type){
        case GET_IMAGE_LISTS:
        case GET_IMAGE_LISTS_ERROR:
        case GET_IMAGE_LISTS_SUCCESS:
            return handleAsyncActions(GET_IMAGE_LISTS, 'imagelists', true)(state,action);
        case CLEAR_IMAGE_LIST:
                return {
                    ...state,
                    imagelists:reducerUtils.initial()
                };
        default:
            return state
    }
}