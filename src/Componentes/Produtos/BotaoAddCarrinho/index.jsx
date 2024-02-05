const BotaoAdicionarCarrinho = ({handleAdicionarAoCarrinho}) => {

  return (
    <button onClick={(e)=>{ e.preventDefault(); handleAdicionarAoCarrinho()}}>Adicionar ao Carrinho</button>
  )
}

export default BotaoAdicionarCarrinho