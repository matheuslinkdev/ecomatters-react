import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import React from "react";
import PlanosPage from "./Pages/PlanosPage/index";
import SobrePage from "./Pages/Sobre/index";
import TelaLoja from "./Pages/TelaLoja";
import DetalheProduto from "./Componentes/DetalhesProduto";
import App from "./App";
import TelaCarrinho from "./Pages/TelaCarrinho";

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
    path: "/planos",
    element: <PlanosPage />,
  },
  {
    path: "/sobre",
    element: <SobrePage />,
  },
  {
    path: "/loja",
    element: <TelaLoja />,
  },
  {
    path: "/loja/:id/",
    element: <DetalheProduto />
  },
  {
    path: "/carrinho",
    element: <TelaCarrinho/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
