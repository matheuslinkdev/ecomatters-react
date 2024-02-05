import { useCarrinho } from "../../Contexts/CarrinhoContext";
import AlterarQuantidade from "./AlterarQuantidade";
import BotaoRemover from "./BotaoRemover";

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useCarrinho();

  console.log("Carrinho:", carrinho);

  const handleRemoverProduto = (id) => {
    removerDoCarrinho(id);
  };

  return (
    <main>
      <h2>Carrinho de Compras</h2>
      {carrinho.length > 0 ? (
        <ul>
          {carrinho.map((produto, index) => (
            <li key={index}>
              <h2>{produto.nome}</h2>
              <span>{produto.descricao}</span>
              <h4> Preço: R$ {produto.preco}</h4>
              <AlterarQuantidade/>
              <BotaoRemover
                handleRemoverProduto={() => {
                  handleRemoverProduto(produto.nome);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </main>
  );
};

export default Carrinho;
