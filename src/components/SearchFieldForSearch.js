import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {FaSearchengin} from 'react-icons/fa'
import FingerprintSharpIcon from '@material-ui/icons/FingerprintSharp';
import {RiInstagramLine, RiFacebookBoxLine} from 'react-icons/ri'
import { Squash as Hamburger } from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux';
import {settingSearchWord2} from '../module/searchword';
function SearchFieldForSearch() {
  const searchword = useSelector(state => state.searchword.searchword);
  
  const [inputWord, setInputWord] = useState('');
  const [isOpen, setOpen] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(settingSearchWord2(inputWord))
  }, [dispatch,inputWord,searchword])
    
    const onPress = (e) => {
      if (e.key ==='Enter'){
        setInputWord(e.target.value);
      }
    }
    
    const handleClick = () =>{
      history.push('/');
    }
  
    const onToggle = () => {
      if (isOpen){
        setOpen(true)
      }
      else{
        setOpen(false)
      }
    }
    return (
      <nav className="SearchFieldForSearch">
        <div className="SearchFieldForSearch__div1">
          <FingerprintSharpIcon className="SearchFieldForSearch__div1__icon" />
          <div className="SearchFieldForSearch__div1__yg" onClick={handleClick}>Y G</div>
        </div>
        <div className="SearchFieldForSearch__div2">
          <input type="text" className="SearchFieldForSearch__div2__input" defaultValue={searchword ? searchword : null} placeholder="Search..." onKeyDown={onPress}/>
          <FaSearchengin type="button" className="SearchFieldForSearch__div2__icon" />
        </div>
        <div className="SearchFieldForSearch__div3">
          <RiInstagramLine className="SearchFieldForSearch__div3__icon"/>
          <RiFacebookBoxLine className="SearchFieldForSearch__div3__icon"/>
        </div>
        <div className="SearchFieldForSearch__ham">
          <Hamburger size={25} toggled={isOpen} onToggle={onToggle} />
        </div>
      </nav>
    )
}

export default SearchFieldForSearch
