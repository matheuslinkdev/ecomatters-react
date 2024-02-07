import { Link } from 'react-router-dom'
import "./style.scss";

const Voltar = ({rotaDestino}) => {
  return (
    <section>
        <Link to={rotaDestino} className='link-retorno'>
            ↩Voltar
        </Link>
    </section>
  )
}

export default Voltar