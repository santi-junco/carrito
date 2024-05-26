import { ProductsContext } from "./ProductsContext";
import { useState, useEffect } from "react";

export const ProductsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProductos(data);
      console.log(data.length);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ productos }}>
      {children}
    </ProductsContext.Provider>
  );
};
