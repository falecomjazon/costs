//import MenuBar from "../MenuBar"
import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"
import styles from './Home.module.css'
import savings from '../../img/cofrinho.png'
import LinkButton from "../layout/LinkButton"
function Home() {
    return (
        <div>
             <NavBar/> 
            <section className={styles.home_container}>
                <h1>Bem vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/novoprojeto" text="Criar Projeto"/>
                
                <img src={savings} alt="Costs" width="155" height="220"/>
            </section>
              <Footer />  
        </div>
    )   
}
export default Home