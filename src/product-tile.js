/* eslint no-unused-vars: 0 */
import React, {useContext} from "react";
import AppContext from "./context";


const ProductTitle = (props) => {

  const {actions} = useContext(AppContext)

  return (
    <div onClick={() => {actions.addProductToCart(props.product)}}>
    <div className="roundel" style={{ backgroundColor: props.product.color }}><img src={props.product.img}></img></div>
    <div className="title">{props.product.name}</div>
    <div className="price">
      ${(props.product.pricePerUnit / 100).toFixed(2)}
    </div>
  </div>
  )
}

export default ProductTitle
