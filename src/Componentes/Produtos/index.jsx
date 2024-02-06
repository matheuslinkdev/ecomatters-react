import { useCarrinho } from "../../Contexts/CarrinhoContext";
import AlterarQuantidade from "../Carrinho/AlterarQuantidade";
import Voltar from "../Voltar";
import BotaoAdicionarCarrinho from "./BotaoAddCarrinho";
import { produtos } from "./data/produtos";
import "./style.scss";

const Produtos = () => {
  const { adicionarAoCarrinho } = useCarrinho();

  const handleQuantidadeChange = (produto, novaQuantidade) => {
    produto.quantidade = novaQuantidade;
  };

  const handleAdicionarAoCarrinho = (produto) => {
    const produtoSelecionado = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.precoReal,
      quantidade: produto.quantidade,
    };
    adicionarAoCarrinho(produtoSelecionado);
    console.log(
      "Produto adicionado ao carrinho:",
      produto.nome,
      produto.quantidade
    );
  };

  return (
    <>
      <main>
        <Voltar rotaDestino="/home"/>
        <h1>Produtos</h1>
        <article>
          {produtos.map((produto, index) => (
            <section key={index}>
              <img src="" alt="" />
              <h1>{produto.nome}</h1>
              <span>{produto.descricao}</span>
              <h2>R$ {produto.precoReal}</h2>
              <AlterarQuantidade
                quantidade={produto.quantidade}
                onQuantidadeChange={(novaQuantidade) =>
                  handleQuantidadeChange(produto, novaQuantidade)
                }
              />
              <BotaoAdicionarCarrinho
                produto={produto}
                handleAdicionarAoCarrinho={() =>
                  handleAdicionarAoCarrinho(produto)
                }
              />
            </section>
          ))}
        </article>
      </main>
    </>
  );
};

export default Produtos;