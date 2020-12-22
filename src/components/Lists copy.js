import { Button, Modal } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from './List';
  
function Lists() {
    const [list, setList] = useState(null);
    const [lists, setLists] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchLists = async () =>{
            try{
                //요청 시작시 error와 lists 초기화
                setError(null);
                setLists(null);
                setLoading(true);
                const response = await axios.get('http://localhost:4000/lists');
                setLists(response.data);
            }
            catch(e)
            {
                setError(e);
            }
            setLoading(false);
        }
        fetchLists();
    },[] );
    


    if (loading) return <div>로딩중...</div>;
    if (error) return <div>Error가 발생하였습니다.</div>;
    if (!lists) return null;
    const onClick = (item) => {
        setList(item)
    }
    return (
        <div>
            <ul className="lists">
                {lists.map(item => (
                    <li className="lists__list" key={item.id} onClick={()=>onClick(item)}>
                        <img className="lists__list__img" src={item.img} alt={item.text} />
                        <div className="lists__list__text">{item.text}</div>
                    </li>
                ))}
            </ul>
            {<List list={list}/>}
            
        </div>
    )
}



export default Lists
