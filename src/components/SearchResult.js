import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchList } from '../module/searchlists';

function SearchResult() {
    const {data, loading, error} = useSelector(state=>state.searchlists.searchlists)
    const dispatch = useDispatch()
    const searchword = useSelector(state => state.searchword.searchword)
    useEffect(()=>{
        if(searchword){
            dispatch(getSearchList(searchword))
        }
    },[dispatch,searchword])
    


    if (loading&&!data) return <div className="loading">로딩 중...</div>
    if (error) return <div className="loading">에러 발생</div>
    if (!data ) return <div className="loading">검색어를 입력하세요</div>;
    return (
        <div className="SearchResult">
            <ul className="SearchResult__ul">
                {
                    data.map(item=> (
                        <li className="SearchResult__ul__li" key={item.index}>
                            <a href={item.link} className="SearchResult__ul__li__a">
                                <div className="SearchResult__ul__li__a__div">{item.title}</div>
                                <img src={item.img} alt="" className="SearchResult__ul__li__a__img"/>
                                <div className="SearchResult__ul__li__a__div2">{item.text}</div>
                            </a>
                        </li>    
                    ))
                }
     
            </ul>
        </div>
    )
}

export default SearchResult
