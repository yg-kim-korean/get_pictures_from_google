import { Button, Modal } from '@material-ui/core';
import React, { useState } from 'react'

function List({item}) {
  const [list, setList] = useState(null);
    // const {img,text} = list; 
    const onHandleList = () => {
      setList(null)
    }
    return (
      <div className="list">
          <img className="list__img" src={item.img} alt={item.text} onClick={()=>onHandleList}  />
          <div className="list__text">{item.text}</div>
      </div>
    )
}

export default List