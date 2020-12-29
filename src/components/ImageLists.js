import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImageLists } from '../module/imagelists';
import List from './List';

function ImageLists() {
    const {data, loading, error} = useSelector(state=>state.imagelists.imagelists);
    const searchword = useSelector(state => state.searchword.searchword) 
    const [id,setId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchword){
        dispatch(getImageLists(searchword))
        }
    }, [dispatch,searchword])
    const onHandle = (seletedId) => {
        setId(seletedId);
    }

    if (loading&&!data) return <div>로딩 중...</div>
    if (error) return <div>에러 발생</div>
    if (!data ) return <div>검색어를 입력하시오</div>;
    return (

        <div className="ImageLists">
            <ul className="ImageLists__ul">
                {data.map((item,index) => (
                        <li className="ImageLists__ul__li" key={index} onClick={(e) => {onHandle(item.index)}} >
                            <img className="ImageLists__ul__li__img" src={item.link} alt={item.title} />
                        </li>
                ))}
            </ul>
               
            
            {/* {   
                id ?
                <List  id={id} />:
                null
            } */}
            
        </div>
    )
}



export default ImageLists
