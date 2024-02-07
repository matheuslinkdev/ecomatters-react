import { texto1, texto2, texto3 } from "./textosHome";
import './style.scss'

const TextosHome = () => {
  return (
    <>
    <h1>Home</h1>
    <article className="lista-textos-home">
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
    </>
  );
};

export default TextosHome;
