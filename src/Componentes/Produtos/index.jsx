import BotaoAdicionarCarrinho from "./BotaoAddCarrinho";
import DropdownQuantidade from "./DropQuantidade";
import { produtos } from "./data/produtos";

const Produtos = () => {
  return (
    <>
      <main>
        <h1>Produtos</h1>

        <article>
          {produtos.map((produto, index) =>{
            return(
              <section key={index}>
                <img src="" alt="" />
                <h1>{produto.nome}</h1>
                <h2>{produto.precoReal}</h2>
                <DropdownQuantidade/>
                <BotaoAdicionarCarrinho/>
              </section>
            )
          })}
        </article>
      </main>
    </>
  );
};

export default Produtos;
