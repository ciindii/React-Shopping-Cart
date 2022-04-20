/* eslint no-unused-vars: 0 */
import React, {useContext} from "react";
import AppContext from "./context";



const ShoppingCart = () => {
  const {shoppingCart, actions} = useContext(AppContext)

  return (
    <div className="shopping-cart">Shopping Cart
    <ul></ul>
        {shoppingCart.map((item, i) => (
        <li>{item.name}<button onClick={() => {actions.removeProductFromCartAtIndex(i)}}>X</button></li>
      ))}</div>
  )
}

export default ShoppingCart;
