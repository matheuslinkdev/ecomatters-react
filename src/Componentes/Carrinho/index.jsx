import { useCarrinho } from "../../Contexts/CarrinhoContext";
import BotaoRemover from "./BotaoRemover";
import Voltar from './../Voltar/index';

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useCarrinho();

const calcularValorTotal = () => {
  const total = carrinho.reduce((total, produto) => {
    return total + produto.preco * produto.quantidade;
  }, 0);
  //Utilizei o método toLocaleString para adicionar a formatação brasileira de números
  return total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

  const handleRemoverProduto = (id) => {
    removerDoCarrinho(id);
  };

  return (
    <main>
      <Voltar rotaDestino="/loja"/>
      <h2>Carrinho de Compras</h2>
      {carrinho.length > 0 ? (
        <>
          <ul>
            {carrinho.map((produto, index) => (
              <li key={index}>
                <h2>{produto.nome}</h2>
                <span>{produto.descricao}</span>
                <h4> Preço: R$ {produto.preco}</h4>
                <h5>Quantidade: {produto.quantidade}</h5>
                <BotaoRemover
                  handleRemoverProduto={() => {
                    handleRemoverProduto(produto.nome);
                  }}
                />
              </li>
            ))}
          </ul>
          <p>Valor Total: {calcularValorTotal()}</p>
        </>
      ) : (
        <section>
          <p>O carrinho está vazio.</p>
        </section>
      )}
    </main>
  );
};

export default Carrinho;
