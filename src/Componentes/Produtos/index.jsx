import { useState } from "react";
import { useCarrinho } from "../../Contexts/CarrinhoContext";
import BotaoAdicionarCarrinho from "./BotaoAddCarrinho";
import DropdownQuantidade from "./DropQuantidade";
import { produtos } from "./data/produtos";

const Produtos = () => {
  const { adicionarAoCarrinho } = useCarrinho();

  //const [quantidade, setQuantidade] = useState(1);

  //const handleQuantidadeChange = (novaQuantidade) => {
   //setQuantidade(novaQuantidade);
  //};

  const handleAdicionarAoCarrinho = (produto) => {
    const produtoSelecionado = {
      nome: produto.nome,
      preco: produto.precoReal,
      //quantidade: quantidade,
    };
    adicionarAoCarrinho(produtoSelecionado);
    //setQuantidade(1);
    console.log("Produto adicionado ao carrinho:", produtoSelecionado);
  };

  return (
    <>
      <main>
        <h1>Produtos</h1>

        <article>
          {produtos.map((produto, index) => {
            return (
              <section key={index}>
                <img src="" alt="" />
                <h1>{produto.nome}</h1>
                <h2>{produto.precoReal}</h2>
                <DropdownQuantidade
                  //quantidade={quantidade}
                  //onChange={handleQuantidadeChange}
                />
                <BotaoAdicionarCarrinho
                  produto={produto}
                  handleAdicionarAoCarrinho={() =>
                    handleAdicionarAoCarrinho(produto) //quantidade//)
                  }
                />
              </section>
            );
          })}
        </article>
      </main>
    </>
  );
};

export default Produtos;
