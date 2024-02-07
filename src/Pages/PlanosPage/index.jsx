import Header from "../../Componentes/Header";
import Planos from "../../Componentes/Planos"
import "./style.scss";

const PlanosPage = () => {
  return (
    <main>
      <Header/>
      <div className="nome-pagina">
        <h1>Planos</h1>
      </div>
      <Planos />
    </main>
  );
}

export default PlanosPage