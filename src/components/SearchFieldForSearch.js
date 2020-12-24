import React, { useState } from 'react'
import {FaSearchengin} from 'react-icons/fa'
import FingerprintSharpIcon from '@material-ui/icons/FingerprintSharp';
import {RiInstagramLine, RiFacebookBoxLine} from 'react-icons/ri'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';

function SearchFieldForSearch() {
  const [focus,setFocus] = useState(false);
  const [isOpen, setOpen] = useState(false)
    const onToggle = () => {
         if (isOpen){
           setOpen(true)
         }
         else{
           setOpen(false)
         }
    }
    
    const onHandle = (e) => {
      e.preventDefault();
      console.log(focus);
      setFocus(!focus)
    }
    return (
      <nav className="SearchFieldForSearch">
        <div className="SearchFieldForSearch__div1">
          <FingerprintSharpIcon className="SearchFieldForSearch__div1__icon" />
          <Link className="SearchFieldForSearch__div1__yg" to="/" >Y G</Link>
        </div>
        <div className="SearchFieldForSearch__div2">
          <input type="text" className="SearchFieldForSearch__div2__input" placeholder="Search.." />
          <FaSearchengin type="button" className="SearchFieldForSearch__div2__icon" onClick={onHandle} />
          
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
