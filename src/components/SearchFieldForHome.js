import React, { useEffect, useState } from 'react'
import {FaSearchengin} from 'react-icons/fa'
import {RiBookMarkLine} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import { settingSearchWord } from '../module/searchword';

function SearchFieldForHome() {
    const searchword = useSelector(state => state.searchword.searchword);
    const [inputWord, setInputWord] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(settingSearchWord(inputWord))
      if (searchword){
        history.push('/searchnews')
      }
    }, [dispatch,inputWord,searchword])
    
    const onPress = (e) =>{
      if (e.key ==='Enter'){
        setInputWord(e.target.value);
      }
    }
    return (
      <div className="SearchFieldForHome">
        <div className="SearchFieldForHome__div1">
          <RiBookMarkLine className="SearchFieldForHome__div1__icon" />
          <Link className="SearchFieldForHome__div1__YG" to="/" >Y G</Link>
        </div>
        <div className="SearchFieldForHome__div2">
          <div className="SearchFieldForHome__div2__div">
            <FaSearchengin type="button" className="SearchFieldForHome__div2__div__icon" />
            <input type="text" className="SearchFieldForHome__div2__div__input" onKeyDown={onPress} />
          </div>
        </div >
        <div className="SearchFieldForHome__div3">
          <div className="SearchFieldForHome__div3__div">
            <Link to="/search" className="SearchFieldForHome__div3__div__link"><input type="submit" className="SearchFieldForHome__div3__div__input" value="YG Search" /></Link>
            <input type="submit" className="SearchFieldForHome__div3__div__input" value="I'm Feeling Lucky" />
          </div>
        </div>
        <div className="SearchFieldForHome__footer">
          <div className="SearchFieldForHome__footer__div">Contact Us</div>
          
        </div>
      </div>
    )
}

export default SearchFieldForHome
