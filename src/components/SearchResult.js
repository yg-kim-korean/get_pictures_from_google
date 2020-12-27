import React from 'react'
import x from '../k.jpg'
function SearchResult() {
    
    return (
        <div className="SearchResult">
            <ul className="SearchResult__ul">
                <li className="SearchResult__ul__li">
                    <a href="#" className="SearchResult__ul__li__a">
                        <div className="SearchResult__ul__li__a__div">asdsadas</div>
                        <img src={x} alt="" className="SearchResult__ul__li__a__img"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SearchResult
