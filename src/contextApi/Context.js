import { createContext, useContext, useReducer } from "react";
import carsDetails from "../BuyCars/constants/carsDetails";
import { carReducer } from "./Reducers";

const ProductContext = createContext();

const Context = ({ children }) => {
  const products = carsDetails

  const [state, dispatch] = useReducer(carReducer, {
    products: products,
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const CarState = () => {
  return useContext(ProductContext);
};

export default Context;