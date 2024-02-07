import { Link } from "react-router-dom";
import Produtos from "../../Componentes/Produtos";
import "./style.scss";
import Header from "../../Componentes/Header";

const TelaLoja = () => {
  return (
    <main>
      <Header/>
      <Link to="/carrinho">Carrinho</Link>
      <div className="nome-pagina">
        <h1>Loja</h1>
      </div>
      <Produtos />
    </main>
  );
};

export default TelaLoja;
