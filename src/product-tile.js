/* eslint no-unused-vars: 0 */
import React, {useContext} from "react";
import AppContext from "./context";
import './styles/product-title.css'
import {BsPlusSquareDotted} from 'react-icons/bs'


const ProductTitle = (props) => {

  const {actions} = useContext(AppContext)

  return (
  <div className="container">
    <img className="icon" src={props.product.img}/>
    <div className="title">{props.product.name}</div>
    <div className="price">
      ${(props.product.pricePerUnit / 100).toFixed(2)}
    </div>
    <div className="button-container">
    <button onClick={ () => {actions.addProductToCart(props.product)}}> 
      <BsPlusSquareDotted />  Add to Cart
    </button>
    </div>
    <button>Nutrition Info</button>
  </div>
  )
}

export default ProductTitle
