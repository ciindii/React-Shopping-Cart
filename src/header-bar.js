/* eslint no-unused-vars: 0 */
import React, {useState, useContext} from "react";
import AppContext from "./context";

const HeaderBar = () => {
  const {products} = useContext(AppContext);
  const [userInput, setUserInput] = useState('')
  return (
    <div className="header-bar">Header Bar
      <input type="text" placholder='items' value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
    </div>
  )
}

export default HeaderBar;