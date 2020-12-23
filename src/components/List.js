import React from 'react'

function List({list}) {
  
  const onHandleList = (e) => {
    
  }
    return (
       list ? 
      <div className="list" onClick={onHandleList} >
          <img className="list__img" src={list.img} alt={list.text}  />
          <div className="list__text">{list.text}</div>
      </div> : 
      null
      
    )
}

export default List