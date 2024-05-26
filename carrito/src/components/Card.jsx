import { useState } from "react";

export const Card = ({ product, handleAdd, handleRemove }) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    handleAdd()
    setAdded(true);
  };

  const clickQuitar = () => {
    handleRemove()
    setAdded(false);
  };

  return (
    <>
      <div key={product.id} className="tarjeta">
        <img
          src={product.image}
          className="tarjeta-imagen"
          alt={product.title}
        />
        <div className="tarjeta-contenido">
          <h5 className="tarjeta-titulo">{product.title}</h5>
          <p className="tarjeta-descripcion">{product.description}</p>
          <p className="tarjeta-precio">${product.price}</p>
          {added ? (
            <button
              type="button"
              className="boton-quitar"
              onClick={clickQuitar}>
              Quitar
            </button>
          ) : (
            <button
              type="button"
              className="boton-agregar"
              onClick={clickAgregar}>
              Agregar
            </button>
          )}
        </div>
      </div>
    </>
  );
};
