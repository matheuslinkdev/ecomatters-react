import { Link } from 'react-router-dom'

const Voltar = ({rotaDestino}) => {
  return (
    <section>
        <Link to={rotaDestino}>
            ↩Voltar
        </Link>
    </section>
  )
}

export default Voltar