import {SET_NOW_PAGE} from './types';

import setnowpage from '../api/setnowpage'
import { handleSetNowPage,setNowPage } from '../lib/asyncUtils';
const initialState={
    nowpage:''
}

export const settingNowPage = setNowPage(SET_NOW_PAGE,setnowpage);

export default function nowpage(state = initialState, action) {
    switch(action.type){
        case SET_NOW_PAGE:
            return handleSetNowPage(SET_NOW_PAGE,'nowpage',true)(state,action);
        default:
            return state;
    }       
}
