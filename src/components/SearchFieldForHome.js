import React, { useState } from 'react'
import {FaSearchengin} from 'react-icons/fa'
import {RiBookMarkLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';

function SearchFieldForHome() {

    const onHandle = (e) => {
      e.preventDefault();
      
    }
    return (
      <div className="SearchFieldForHome">
        <div className="SearchFieldForHome__div1">
          <RiBookMarkLine className="SearchFieldForHome__div1__icon" />
          <Link className="SearchFieldForHome__div1__YG" to="/" >Y G</Link>
        </div>
        <div className="SearchFieldForHome__div2">
          <div className="SearchFieldForHome__div2__div">
            <FaSearchengin type="button" className="SearchFieldForHome__div2__div__icon" onClick={onHandle} />
            <input type="text" className="SearchFieldForHome__div2__div__input" />
          </div>
        </div >
        <div className="SearchFieldForHome__div3">
          <div className="SearchFieldForHome__div3__div">
            <input type="submit" className="SearchFieldForHome__div3__div__input" value="YG Search" />
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
