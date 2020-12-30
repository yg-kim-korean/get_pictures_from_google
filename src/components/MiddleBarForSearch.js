import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearImageList } from '../module/imagelists';
import { clearImageListFromAxios, clearSearchList } from '../module/searchlists';

function MiddleBarForSearch() {
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickNews = () =>{
        dispatch(clearImageList())
        dispatch(clearImageListFromAxios())
        history.push('/searchnews')
    }
    const onClickImageFromNaver = () =>{
        dispatch(clearSearchList())
        dispatch(clearImageListFromAxios())
        history.push('/imagefromnaverapi')
    }
    const onClickImageFromAxios = () =>{
        dispatch(clearSearchList())
        dispatch(clearImageList())
        history.push('/imagefromaxios')
    }
    return (
        <div className="middleBarForSearch">
            <ul className="middleBarForSearch__ul">
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" onClick={onClickNews}>News</div>
                </li>
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" onClick={onClickImageFromNaver}>Image F NaverAPI</div>
                </li>
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" onClick={onClickImageFromAxios}>Image F Axios</div>
                </li>
            </ul>
        </div>
    )
}

export default MiddleBarForSearch
