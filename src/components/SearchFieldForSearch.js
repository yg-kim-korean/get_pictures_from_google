import React, { useEffect, useState } from 'react'
import { useHistory} from 'react-router-dom'
import {FaSearchengin} from 'react-icons/fa'
import {VscQuote} from 'react-icons/vsc';


import { useDispatch, useSelector } from 'react-redux';
import {settingSearchWord} from '../module/searchword';
import { clearImageList } from '../module/imagelists';
import { clearSearchList } from '../module/searchlists';
function SearchFieldForSearch() {
  const searchword = useSelector(state => state.searchword.searchword);
  const [inputWord, setInputWord] = useState('');
  const history = useHistory()  
  const dispatch = useDispatch();
  useEffect(() => {
    if (inputWord)
      {
        dispatch(settingSearchWord(inputWord))
        setInputWord('');
      }
  }, [dispatch,inputWord,searchword])
    
    const onPress = (e) => {
      if (e.key ==='Enter'){
        setInputWord(e.target.value);
      }
    }
    
    const handleClick = () =>{
      dispatch(clearImageList())
      dispatch(clearSearchList)
      dispatch(settingSearchWord(''))
      history.push('/');
    }
  
     return (
      <nav className="SearchFieldForSearch">
        <div className="SearchFieldForSearch__div1">
          <VscQuote className="SearchFieldForSearch__div1__icon" />
          <div className="SearchFieldForSearch__div1__yg" onClick={handleClick} >YG</div>
        </div>
        <div className="SearchFieldForSearch__div2">
          <input type="text" className="SearchFieldForSearch__div2__input" defaultValue={searchword ? searchword : null} placeholder="Search..." onKeyDown={onPress}/>
          <FaSearchengin type="button" className="SearchFieldForSearch__div2__icon" />
        </div>
        <div className="SearchFieldForSearch__div3">

        </div>
      </nav>
    )
}

export default SearchFieldForSearch
