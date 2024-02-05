import { useCarrinho } from "../../Contexts/CarrinhoContext";
import BotaoRemover from "./BotaoRemover";

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useCarrinho();

  const handleRemoverProduto = (id) => {
    removerDoCarrinho(id);
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {carrinho.map((produto, index) => (
          <li key={index}>
            <h2>{produto.nome}</h2>
            <h4> Preço: R$ {produto.preco}</h4>
            <BotaoRemover
              handleRemoverProduto={() => {
                handleRemoverProduto(produto.nome);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;
