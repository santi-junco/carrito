import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const ComprasPage = () => {
  const [productos, setProductos] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProductos(data);
      console.log(data);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <hr />
      <ul className="lista-compra">
        {productos.map((product) => (
          <li className="item-compra">
            <Card key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};
