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
      imagem: produto.imagem,
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.precoReal,
      quantidade: produto.quantidade,
    };
    adicionarAoCarrinho(produtoSelecionado);
  };

  return (
    <>
      <main className="main-produtos">
        <Voltar rotaDestino="/ecomatters-react/home" />
        <article className="lista-produtos">
          {produtos.map((produto, index) => (
            <section key={index} className="produto">
              <img src={produto.imagem} alt={produto.nome} />
              <div className="informacoes-produto">
                <h1>{produto.nome}</h1>
                <span>{produto.descricao}</span>
                <h2>R$ {produto.precoReal}</h2>
              </div>
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
