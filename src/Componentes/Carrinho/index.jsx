import { useCarrinho } from "../../Contexts/CarrinhoContext";
import BotaoRemover from "./BotaoRemover";

const Carrinho = () => {
  const { carrinho } = useCarrinho();

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {carrinho.map((item, index) => (
          <li key={index}>
            {item.nome} - Quantidade: {item.quantidade}
            <BotaoRemover handleRemoverProduto={handleRemoverProduto}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;
