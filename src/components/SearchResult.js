import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchList } from '../module/lists';
import x from '../k.jpg'
function SearchResult() {
    const {data, loading, error} = useSelector(state=>state.lists.searchlists)
    const dispatch = useDispatch()
    const searchword='델피에로';
    useEffect(()=>{
        dispatch(getSearchList(searchword));
    },[dispatch,searchword])
    console.log(loading, data, error);
    if (loading&&!data) return <div>로딩 중...</div>
    if (error) return <div>에러 발생</div>
    if (!data ) return null;
    return (
        <div className="SearchResult">
            <ul className="SearchResult__ul">
                {data.map(item=> (
                    <li className="SearchResult__ul__li" key={item.index}>
                        <a href={item.link} className="SearchResult__ul__li__a">
                            <div className="SearchResult__ul__li__a__div">{item.title}</div>
                            <img src={item.img} alt="" className="SearchResult__ul__li__a__img"/>
                        </a>
                    </li>    
                ))}
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
