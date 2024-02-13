import { Link } from "react-router-dom";
import "./style.scss";

const CaixasRedirecionamento = () => {
  return (
    <article className="lista-caixas">
      <section>
        <Link to="/ecomatters-react/planos" className="link-redirecionamento">
          Planos ↪
        </Link>
        <p>Explore nossos planos, cada um contém uma série de benefícios.</p>
      </section>
      <section>
        <Link to="/ecomatters-react/loja" className="link-redirecionamento">
          Loja ↪
        </Link>
        <p>
          Explore nossos produtos produzidos com foco no mínimo impacto
          ambiental.
        </p>
      </section>
      <section>
        <Link to="/ecomatters-react/sobre" className="link-redirecionamento">
          Sobre ↪
        </Link>
        <p>Quem somos, por que existimos e quais nossos objetivos?</p>
      </section>
    </article>
  );
};

export default CaixasRedirecionamento;
