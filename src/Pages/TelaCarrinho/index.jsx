import Carrinho from "../../Componentes/Carrinho";
import "./style.scss";

const TelaCarrinho = () => {
  return (
    <main>
      <div className="nome-pagina">
        <h1>Carrinho</h1>
      </div>
      <Carrinho />
    </main>
  );
};

export default TelaCarrinho;
