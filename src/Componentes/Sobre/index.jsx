import Voltar from "../Voltar";
import "./style.scss";

import { texto1, texto2, texto3 } from "./textossobre";

const Sobre = () => {
  return (
    <main className="pag-textos">
      <Voltar rotaDestino="/ecomatters-react/home" />

      <article className="textos-sobre">
        <section>
          <p>{texto1}</p>
        </section>
        <section>
          <p>{texto2}</p>
        </section>
        <section>
          <p>{texto3}</p>
        </section>
      </article>
    </main>
  );
};

export default Sobre;
