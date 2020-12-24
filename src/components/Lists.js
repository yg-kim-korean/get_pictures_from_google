import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../module/lists';
import List from './List';

function Lists() {
    const {data, loading, error} = useSelector(state=>state.lists.lists);
    
    const [id,setId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLists());
    }, [dispatch])
    const onHandle = (seletedId) => {
        
        setId(seletedId);
    }

    if (loading&&!data) return <div>로딩 중...</div>
    if (error) return <div>에러 발생</div>
    if (!data ) return null;
    return (
        <div className="page">
            <div className="lists">
                <ul className="lists__ul">
                    {data.map(item => (
                        <li className="lists__list" key={item.id} onClick={(e) => {onHandle(item.id)}} >
                            <img className="lists__list__img" src={item.img} alt={item.text} />
                            <div className="lists__list__text">{item.text}</div>
                        </li>
                    ))}
                </ul>
                </div>
            
            {   
                id ?
                <List  id={id} />:
                null
            }
            
        </div>
    )
}



export default Lists
