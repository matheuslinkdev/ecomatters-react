import { Link } from "react-router-dom";
import Produtos from "../../Componentes/Produtos";
import "./style.scss";

const TelaLoja = () => {
  return (
    <main>
        <Link to="/carrinho">Carrinho</Link>
        <Produtos />
    </main>
  );
};

export default TelaLoja;
