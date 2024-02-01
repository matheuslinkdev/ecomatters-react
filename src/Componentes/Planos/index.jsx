import { planos } from "./data/planos";

const Planos = () => {
  return (
    <main>
      <h1>Planos</h1>
      <article>
        {planos.map((plano, index) => {
          return (
            <section key={index}>
              <h2>{plano.nome}</h2>
              <ul>
                <li>{plano.beneficios[0]}</li>
                <li>{plano.beneficios[1]}</li>
                <li>{plano.beneficios[2]}</li>
              </ul>
              <div>
                <h4>R${plano.precoMensal}</h4>
                <span>Mensal</span>
              </div>
              <div>
                <h4>R${plano.precoAnual}</h4>
                <span>Anual</span>
              </div>
            </section>
          );
        })}
      </article>
    </main>
  );
};

export default Planos;
