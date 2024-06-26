import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CarritoPage } from "./pages/CarritoPage";
import { ComprasPage } from "./pages/ComprasPage";
import { ProductsProvider } from "./context/ProductsProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <ProductsProvider>
      <CarritoProvider>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
            <Route
              path="/carrito"
              element={<CarritoPage></CarritoPage>}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductsProvider>
  );
};
