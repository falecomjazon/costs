import { BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './ProjetoCard.module.css'
function ProjetoCard({id, name, orcamento, category, handleRemove}) {
    const remove = (e)=>{
        e.preventDefault()
        handleRemove(id)
    }
    
    return (
        <div className={styles.projeto_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>R$ {orcamento}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}>{category}</span>
            </p>
            <div className={styles.projeto_card_actions}>
                <Link to={`/projeto/${id}`}>
                    <BsPencil />Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/>Excluir
                </button>
            </div>
        </div>
    )
}
export default ProjetoCard 