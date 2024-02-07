import { useCarrinho } from "../../Contexts/CarrinhoContext";
import BotaoRemover from "./BotaoRemover";
import Voltar from "./../Voltar/index";
import "./style.scss";

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useCarrinho();

  const calcularValorTotal = () => {
    const total = carrinho.reduce((total, produto) => {
      return total + produto.preco * produto.quantidade;
    }, 0);
    //Utilizei o método toLocaleString para adicionar a formatação brasileira de números
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleRemoverProduto = (id) => {
    removerDoCarrinho(id);
  };

  return (
    <main>
      <Voltar rotaDestino="/loja" />
      {carrinho.length > 0 ? (
        <>
          {carrinho.map((produto, index) => (
            <article className="lista-produtos" key={index}>
              <section className="produto">
                <img src={produto.imagem} alt={produto.nome} />
                <div className="informacoes-produto">
                  <h1>{produto.nome}</h1>
                  <span>{produto.descricao}</span>
                  <h2>R$ {produto.preco}</h2>
                </div>
                <div className="numero-carrinho">
                  <h5 className="quantidade">
                    Quantidade: {produto.quantidade}
                  </h5>
                </div>
                <BotaoRemover
                  handleRemoverProduto={() => {
                    handleRemoverProduto(produto.nome);
                  }}
                />
              </section>
            </article>
          ))}
          <p>Valor Total: {calcularValorTotal()}</p>
        </>
      ) : (
        <section className="msg-carrinho-vazio">
          <p>
            O seu carrinho está vazio, adicione itens nele para vê-los aqui.
          </p>
        </section>
      )}
    </main>
  );
};

export default Carrinho;
