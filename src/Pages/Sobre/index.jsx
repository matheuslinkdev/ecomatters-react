import Header from "../../Componentes/Header";
import Sobre from "../../Componentes/Sobre"
import "./style.scss";

const SobrePage = () => {
  return (
    <main>
      <Header/>
      <div className="nome-pagina">
        <h1>Sobre</h1>
      </div>
      <Sobre />
    </main>
  );
}

export default SobrePage