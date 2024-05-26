import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const compraReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Add Compra":
        return [...state, action.payload];

      case "[CARRITO] Increase Amount":
        return state.map((compra) => {
          if (compra.id === action.payload)
            return { ...compra, amount: compra.amount + 1 };
          return compra;
        });

      case "[CARRITO] Decrease Amount":
        return state.map((compra) => {
          if (compra.id === action.payload && compra.amount > 1)
            return { ...compra, amount: compra.amount - 1 };
          return compra;
        });

      case "[CARRITO] Remove Compra":
        return state.filter((compra) => compra.id !== action.payload);

      default:
        return state;
    }
  };
  const [listCompras, dispatch] = useReducer(compraReducer, initialState);

  const addCompra = (compra) => {
    compra.amount = 1;
    const action = {
      type: "[CARRITO] Add Compra",
      payload: compra,
    };
    dispatch(action);
  };

  const increaseAmount = (id) => {
    const action = {
      type: "[CARRITO] Increase Amount",
      payload: id,
    };
    dispatch(action);
  };

  const decreaseAmount = (id) => {
    const action = {
      type: "[CARRITO] Decrease Amount",
      payload: id,
    };
    dispatch(action);
  };

  const removeCompra = (id) => {
    const action = {
      type: "[CARRITO] Remove Compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listCompras,
        addCompra,
        increaseAmount,
        decreaseAmount,
        removeCompra,
      }}>
      {children}
    </CarritoContext.Provider>
  );
};
