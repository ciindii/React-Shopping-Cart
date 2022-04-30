/* eslint no-unused-vars: 0 */
import React from "react";
import productData from "./data";

const Context = React.createContext();

export const AppContextProvider = props => {
  const [products, setProducts] = React.useState(productData);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [totalCartPrice, setTotalCartPrice] = React.useState(0);

  const filterProductsByName = React.useCallback(name => {}, []);

  const addProductToCart = React.useCallback(product => {
    setShoppingCart((prevState) => [
      ...prevState,
      product
    ])
  }, []);

  const removeProductFromCartAtIndex = React.useCallback((index) => {
    setShoppingCart(currentShoppingCart => currentShoppingCart.filter((item, i) => i))
  }, [setShoppingCart]);
  
  React.useEffect(() => {
    setTotalCartPrice(0);
  }, [shoppingCart]);

  const providerValue = React.useMemo(
    () => ({
      products,
      shoppingCart,
      totalCartPrice,
      actions: {
        filterProductsByName,
        addProductToCart,
        removeProductFromCartAtIndex
      }
    }),
    [
      products,
      shoppingCart,
      totalCartPrice,
      filterProductsByName,
      addProductToCart,
      removeProductFromCartAtIndex
    ]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};
export default Context;
