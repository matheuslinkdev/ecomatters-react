import Voltar from "../Voltar";
import BotaoAssinar from "./BotaoAssinar";
import { planos } from "./data/planos";
import "./style.scss";

const Planos = () => {
  return (
    <main>
      <Voltar rotaDestino="/home" />
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
              <BotaoAssinar />
            </section>
          );
        })}
      </article>
    </main>
  );
};

export default Planos;
