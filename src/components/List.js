import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearList, getList } from '../module/lists';

function List({id}) {
  const {data, loading, error} = useSelector(state=>state.lists.list[id])
  || {
    loading:false,
    data: null,
    error: null
  }; // 아예 데이터가 존재하지 않을때가 있으니까 비구조화 할당이 오류나지 않도록
  
  const dispatch = useDispatch();
  useEffect(() => {
      
      dispatch(getList(id));
  }, [dispatch,id])
  const onHandleList = (e) => {
    e.preventDefault();
    dispatch(clearList());
  }
  if (loading&&!data) return <div>로딩 중...</div>
  if (error) return <div>에러발생</div>
  if (!data ) return null;
  return (

    <div className="list" onClick={onHandleList} >
        <img className="list__img" src={data.img} alt={data.text}  />
        <div className="list__text">{data.text}</div>
    </div> 
      
    )
}

export default List