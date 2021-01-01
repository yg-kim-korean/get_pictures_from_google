import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearImageList } from '../module/imagelists';
import { clearImageListFromAxios, clearSearchList } from '../module/searchlists';
import { settingNowPage } from '../module/setnowpage';

function MiddleBarForSearch() {
    const nowPage = useSelector(state => state.setnowpage.nowpage)
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickNews = () =>{
        dispatch(clearImageList())
        dispatch(clearImageListFromAxios())
        dispatch(settingNowPage('news'))
        history.push('/searchnews')
    }
    const onClickImageFromNaver = () =>{
        dispatch(clearSearchList())
        dispatch(clearImageListFromAxios())
        dispatch(settingNowPage('imfn'))
        history.push('/imagefromnaverapi')
    }
    const onClickImageFromAxios = () =>{
        dispatch(clearSearchList())
        dispatch(clearImageList())
        dispatch(settingNowPage('imfa'))
        history.push('/imagefromaxios')
    }
    useEffect(() => {
    }, [nowPage])
    const setStyle={color:'#4374D9', fontWeight:'bolder',borderBottom:'4px solid #4374D9'};
    return (
        <div className="middleBarForSearch">
            <ul className="middleBarForSearch__ul">
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" style={nowPage==='news' ?  setStyle: null} onClick={onClickNews}>News</div>
                </li>
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" style={nowPage==='imfn' ? setStyle: null} onClick={onClickImageFromNaver}>Image F NaverAPI</div>
                </li>
                <li className="middleBarForSearch__ul__li">
                    <div className="middleBarForSearch__ul__li__div" style={nowPage==='imfa' ? setStyle : null} onClick={onClickImageFromAxios}>Image F Axios</div>
                </li>
            </ul>
        </div>
    )
}

export default MiddleBarForSearch
