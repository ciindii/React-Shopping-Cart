/* eslint no-unused-vars: 0 */
import React, {useContext} from "react";
import AppContext from "./context";
import {VscTrash} from 'react-icons/vsc'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const ShoppingCart = () => {
  const {shoppingCart, actions} = useContext(AppContext)

  return (
    <div className="shopping-cart">Shopping Cart
      <ul>
        {shoppingCart.map((item, i) => (
        <li key={i}>
          <span className='count'>1</span> 
          <span>{item.name}</span>
          <span>$0.00</span>
        <button onClick={() => {actions.removeProductFromCartAtIndex(i)}}><VscTrash /></button></li>
      ))}
      </ul>
      <div className="total">
        total: <span>$0.00</span>
        <button><AiOutlineShoppingCart /> checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart;
