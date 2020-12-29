import React from 'react'
import { useHistory } from 'react-router-dom';

function MiddleBarForSearch() {
    const history = useHistory();
    
    const onClickNews = () =>{
        history.push('/searchnews')
    }
    const onClickImage = () =>{
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
