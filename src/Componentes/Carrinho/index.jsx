import { useCarrinho } from "../../Contexts/CarrinhoContext";

const Carrinho = () => {
  const { carrinho } = useCarrinho();

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {carrinho.map((item, index) => (
          <li key={index}>
            {item.nome} - Quantidade: {item.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;
