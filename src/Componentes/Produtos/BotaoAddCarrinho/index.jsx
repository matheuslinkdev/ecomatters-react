const BotaoAdicionarCarrinho = ({ handleAdicionarAoCarrinho }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleAdicionarAoCarrinho();
      }}
      className="btn-adicionar-carrinho"
    >
      Adicionar ao Carrinho
    </button>
  );
};

export default BotaoAdicionarCarrinho;
