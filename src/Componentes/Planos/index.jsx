import Voltar from "../Voltar";
import BotaoAssinar from "./BotaoAssinar";
import { planos } from "./data/planos";
import "./style.scss";

const Planos = () => {
  return (
    <main>
      <Voltar rotaDestino="/ecomatters-react/home" />
      <article className="planos">
        {planos.map((plano, index) => (
          <section key={index} className="card-plano">
            <div className="conteudo-plano">
              <h2>{plano.nome}</h2>
              <ul>
                {plano.beneficios.map((beneficio, bIndex) => (
                  <li key={bIndex}>{beneficio}</li>
                ))}
              </ul>
              <section className="precos-planos">
                <div>
                  <h4>R${plano.precoMensal}</h4>
                  <span>Mensal</span>
                </div>
                <div>
                  <h4>R${plano.precoAnual}</h4>
                  <span>Anual</span>
                </div>
              </section>
              <BotaoAssinar />
            </div>
          </section>
        ))}
      </article>
    </main>
  );
};

export default Planos;
