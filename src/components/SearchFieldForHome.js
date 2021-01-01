import React, { useEffect, useRef, useState } from 'react'
import {FaSearchengin} from 'react-icons/fa'
import {VscQuote} from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import { settingSearchWord } from '../module/searchword';

function SearchFieldForHome() {
    const searchword = useSelector(state => state.searchword.searchword);
    const [inputWord, setInputWord] = useState('');
    const inputRef = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
      inputRef.current.focus();
      if (inputWord)
      {
        dispatch(settingSearchWord(inputWord))
      }
      if (searchword){
        history.push('/searchnews')
      }
    }, [dispatch,inputWord,searchword,history])
    
    const onPress = (e) =>{
      if (e.key ==='Enter'){
        setInputWord(e.target.value);
      }
    }
    return (
      <div className="SearchFieldForHome">
        <div className="SearchFieldForHome__div1">
          <VscQuote className="SearchFieldForHome__div1__icon" />
          <Link className="SearchFieldForHome__div1__YG" to="/" >YG</Link>
        </div>
        <div className="SearchFieldForHome__div2">
          <div className="SearchFieldForHome__div2__div">
            <div  className="SearchFieldForHome__div2__div__icon"><FaSearchengin type="button" /></div>
            <input type="text" className="SearchFieldForHome__div2__div__input" ref={inputRef} onKeyDown={onPress} />
          </div>
        </div >
        <div className="SearchFieldForHome__div3">
          <div className="SearchFieldForHome__div3__div">
            <Link to="/searchnews" className="SearchFieldForHome__div3__div__link"><input type="submit" className="SearchFieldForHome__div3__div__input" value="YG Search" /></Link>
            <input type="submit" className="SearchFieldForHome__div3__div__input" value="I'm Feeling Lucky" />
          </div>
        </div>
      </div>
    )
}

export default SearchFieldForHome
