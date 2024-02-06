import { Link } from 'react-router-dom'
import "./style.scss";

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