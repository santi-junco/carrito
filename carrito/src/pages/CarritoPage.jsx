import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const {
    listCompras,
    increaseAmount,
    decreaseAmount,
    removeCompra,
  } = useContext(CarritoContext);

  const calcularTotal = () => {
    let total = 0;
    listCompras.forEach((element) => {
      total += element.price * element.amount;
    });
    return total.toFixed(2);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {listCompras.map((compra) => (
            <tr key={compra.id}>
              <th scope="row">{compra.title}</th>
              <td>{compra.price}</td>
              <td>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => decreaseAmount(compra.id)}>
                    -
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    {compra.amount}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => increaseAmount(compra.id)}>
                    +
                  </button>
                </div>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeCompra(compra.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <td>{calcularTotal()}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-success" disabled={listCompras < 1}>Buy</button>
      </div>
    </>
  );
};
