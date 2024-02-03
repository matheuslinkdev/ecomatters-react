const BotaoAdicionarCarrinho = ({handleAdicionarAoCarrinho, quantidade}) => {

  return (
    <button onClick={(e)=>{ e.preventDefault() ,handleAdicionarAoCarrinho(quantidade)}}>Adicionar ao Carrinho</button>
  )
}

export default BotaoAdicionarCarrinho