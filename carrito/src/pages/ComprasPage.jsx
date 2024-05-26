import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const { productos } = useContext(ProductsContext);
  const {
    addCompra,
    removeCompra,
  } = useContext(CarritoContext);

  const handleAdd = (compra) => {
    addCompra(compra);
  };

  const handleRemove = (id) => {
    removeCompra(id);
  };

  return (
    <>
      <h1>Products</h1>
      <hr />
      <ul>
        {productos.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleAdd={() => handleAdd(product)}
            handleRemove={() => handleRemove(product.id)}
          />
        ))}
      </ul>
    </>
  );
};
