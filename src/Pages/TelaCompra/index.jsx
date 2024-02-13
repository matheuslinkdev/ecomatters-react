import "./style.scss";
import Voltar from "./../../Componentes/Voltar/index";
import Header from "../../Componentes/Header";

const TelaCompra = () => {
  return (
    <main className="main-compra">
      <Header />
      <Voltar rotaDestino="/ecomatters-react/carrinho" />
      <section className="nome-pagina">
        <h1>Tela de Compra</h1>
      </section>
      <div>
        <h3>Work in progress...</h3>
      </div>
    </main>
  );
};

export default TelaCompra;
