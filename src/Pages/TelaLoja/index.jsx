import { Link } from "react-router-dom";
import Produtos from "../../Componentes/Produtos";

const TelaLoja = () => {
  return (
    <main>
      <Link to="/carrinho">Carrinho</Link>
      <Produtos />
    </main>
  );
};

export default TelaLoja;
