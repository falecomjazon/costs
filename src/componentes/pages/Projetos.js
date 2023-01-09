//import MenuBar from "../MenuBar"
import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"
//import styles from './Home.module.css'
import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "./Projetos.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
function Projetos() {

    const location = useLocation()
    let message = ''

    //console.log(location.state)
    if(location.state){
        message = location.state.message
    }
    return (
        <div className={styles.project_container}>
            <NavBar/> 
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/novoprojeto" text="Novo Projeto"/>
                
            </div>
          {/*   <section className={styles.home_container}>
                <h1>Meus projetos</h1>
                {message && <Message msg={message} type="success"/>}
                
            </section> */}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
              <Footer />  
        </div>
    )   
}
export default Projetos