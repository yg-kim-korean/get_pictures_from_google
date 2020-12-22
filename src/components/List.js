import React, { useEffect, useState } from 'react'

function List({item}) {
  const [list, setList] = useState(item);
  
    
    const onHandleList = (e) => {
      // e.preventDefault();
      setList(null)
    }
    return (
       list ? 
      <div className="list" onClick={onHandleList} >
          <img className="list__img" src={item.img} alt={item.text}  />
          <div className="list__text">{item.text}</div>
      </div> : null
      
    )
}

export default List