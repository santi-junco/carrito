export const Card = ({ product }) => {
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
          <a href="#" className="boton-agregar">
            Add
          </a>
        </div>
      </div>
    </>
  );
};
