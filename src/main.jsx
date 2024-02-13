import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import React from "react";
import PlanosPage from "./Pages/PlanosPage/index";
import SobrePage from "./Pages/Sobre/index";
import TelaLoja from "./Pages/TelaLoja";
import TelaCarrinho from "./Pages/TelaCarrinho";
import { CarrinhoProvider } from "./Contexts/CarrinhoContext";
import TelaCompra from "./Pages/TelaCompra";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/ecomatters-react/planos",
    element: <PlanosPage />,
  },
  {
    path: "/ecomatters-react/sobre",
    element: <SobrePage />,
  },
  {
    path: "/ecomatters-react/loja",
    element: <TelaLoja />,
  },
  {
    path: "/ecomatters-react/carrinho",
    element: <TelaCarrinho />,
  },
  {
    path: "/ecomatters-react/compra",
    element: <TelaCompra />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <RouterProvider router={router} />
    </CarrinhoProvider>
  </React.StrictMode>
);
