import Carrinho from "../../Componentes/Carrinho";
import Header from "../../Componentes/Header";
import "./style.scss";

const TelaCarrinho = () => {
  return (
    <main>
      <Header/>
      <div className="nome-pagina">
        <h1>Carrinho</h1>
      </div>
      <Carrinho />
    </main>
  );
};

export default TelaCarrinho;
