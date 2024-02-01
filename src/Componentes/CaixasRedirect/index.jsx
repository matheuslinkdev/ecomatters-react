import { Link } from "react-router-dom";

const CaixasRedirecionamento = () => {
  return (
    <article>
      <section>
        <Link to="/planos">Planos</Link>
        <p>Explore nossos planos, cada um contém uma série de benefícios.</p>
      </section>
      <section>
        <Link to="/loja">Loja</Link>
        <p>
          Explore nossos produtos produzidos com foco no mínimo impacto
          ambiental.
        </p>
      </section>
      <section>
        <Link to="/sobre">Sobre</Link>
        <p>Quem somos, por que existimos e quais nossos objetivos?</p>
      </section>
    </article>
  );
};

export default CaixasRedirecionamento;
