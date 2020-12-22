import React from 'react'
import ImageSearchSharpIcon from '@material-ui/icons/ImageSearchSharp';

function SearchField() {
    const onClick = () => {
      
    }
    return (
      <div className="searchfield">
        <div className="searchfield__div1">
          <h3>이미지 검색하기</h3>
        </div>
        <div className="searchfield__div2">
          <input type="text" className="searchfield__input" />
          <ImageSearchSharpIcon onClick={onClick} type="" /> 
        </div>
      </div>
    )
}

export default SearchField
