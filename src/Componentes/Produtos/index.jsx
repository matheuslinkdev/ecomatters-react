import { useState } from "react";
import { useCarrinho } from "../../Contexts/CarrinhoContext";
import BotaoAdicionarCarrinho from "./BotaoAddCarrinho";
import { produtos } from "./data/produtos";

const Produtos = () => {
  const { adicionarAoCarrinho } = useCarrinho();

  const handleAdicionarAoCarrinho = (produto) => {
    const produtoSelecionado = {
      nome: produto.nome,
      preco: produto.precoReal,
    };
    adicionarAoCarrinho(produtoSelecionado);
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
                <span>{produto.descricao}</span>
                <h2>R$ {produto.precoReal}</h2>
                <BotaoAdicionarCarrinho
                  produto={produto}
                  handleAdicionarAoCarrinho={() =>
                    handleAdicionarAoCarrinho(produto)
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
