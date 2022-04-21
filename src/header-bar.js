/* eslint no-unused-vars: 0 */
import React, {useState, useContext} from "react";
import AppContext from "./context";
import { RiStarSmileLine } from "react-icons/ri";
import {BiSearchAlt} from 'react-icons/bi';


const HeaderBar = () => {
  const {products} = useContext(AppContext);
  const [userInput, setUserInput] = useState('')
  return (
    <div className="header-bar"><span><RiStarSmileLine /> Yummy Resturant</span>
      {/* <input type="text" placholder='items' value={userInput} onChange={(e) => setUserInput(e.target.value)}></input> */}

      <div className='search-box'>
        <input type='text' placeholder='search...'/>
          <a href='##' className='icon-search'>
            <BiSearchAlt />
          </a>
      </div>
    </div>
  )
}

export default HeaderBar;