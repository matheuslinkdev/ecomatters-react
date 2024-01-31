import { Link } from "react-router-dom"

const CaixasRedirecionamento = () => {
  return (
    <article>
      <section><Link to="/planos">Planos</Link></section>
      <section><Link to="/loja">Loja</Link></section>
      <section><Link to="/sobre">Sobre</Link></section>
    </article>
  )
}

export default CaixasRedirecionamento