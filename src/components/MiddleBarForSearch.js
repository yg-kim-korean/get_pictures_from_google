import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearImageList } from '../module/imagelists';
import { clearSearchList } from '../module/searchlists';

function MiddleBarForSearch() {
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickNews = () =>{
        dispatch(clearImageList())
        history.push('/searchnews')
    }
    const onClickImage = () =>{
        dispatch(clearSearchList())
        history.push('/image')
    }
    return (
        <div className="middleBarForSearch">
            <ul className="middleBarForSearch__ul">
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" onClick={onClickNews}>News</div>
                </li>
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" onClick={onClickImage}>Image</div>
                </li>
            </ul>
        </div>
    )
}

export default MiddleBarForSearch
