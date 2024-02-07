import CaixasRedirecionamento from "../../Componentes/CaixasRedirect"
import TextosHome from "../../Componentes/TextosHome"
import './style.scss'

const HomePage = () => {
  return (
    <main>
      <div className="nome-pagina">
        <h1>Home</h1>
      </div>
      <TextosHome />
      <CaixasRedirecionamento />
    </main>
  );
}

export default HomePage