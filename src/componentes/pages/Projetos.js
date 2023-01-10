//import MenuBar from "../MenuBar"
import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"
//import styles from './Home.module.css'
import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "./Projetos.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import { useState , useEffect, useRef} from "react"
import userEvent from "@testing-library/user-event"
import ProjetoCard from "../projeto/ProjetoCard"
import Loading from "../layout/Loading"
function Projetos() {
    const [projetos,setProjetos] = useState([])
    const location = useLocation()
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projetoMessage,setProjetoMessage] = useState('')

    useEffect(()=>{
        setTimeout(()=>{

       

        fetch('http://localhost:5000/projetos',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
           // console.log(data)
            setProjetos(data)
            setRemoveLoading(true)
        })
        .catch((err)=>console.log(err))
    },300)
    },[])

    let message = ''

    //console.log(location.state)
    if(location.state){
        message = location.state.message
    }

    function removerProjeto(id) {
        fetch(`http://localhost:5000/projetos/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
           // console.log(data)
            setProjetos(projetos.filter((projeto) =>projeto.id !== id))
            setProjetoMessage('Projeto excluído com sucesso')
        })
        .catch((err)=>console.log(err)) 
        
    }

    return (
        <div className={styles.project_container}>
            <NavBar/> 
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/novoprojeto" text="Novo Projeto"/>
                
            </div>
            {message && <Message msg={message} type="success"/>}
            {projetoMessage && <Message msg={projetoMessage} type="success"/>}
          {/*   <section className={styles.home_container}>
                <h1>Meus projetos</h1>
                {message && <Message msg={message} type="success"/>}
                
            </section> */}
            <Container customClass="start">
               
                {
                    projetos.map((projeto)=>{
                       return <ProjetoCard 
                       id={projeto.id}
                       name={projeto.nomeprojeto}
                       orcamento={projeto.orcamento}
                       category={projeto.category.name}
                       key={projeto.id}
                       handleRemove={removerProjeto}
                       />
                })}
            {!removeLoading && <Loading/>}
            {removeLoading && projetos.length ===0 &&(
                <p>Não há projetos cadastrados</p>
            )}
            </Container>
              <Footer />  
        </div>
    )   
}
export default Projetos