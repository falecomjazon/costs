//import MenuBar from "../MenuBar"
import Footer from "../layout/Footer"
import NavBar from "../layout/NavBar"
import styles from './Home.module.css'
function Contato(params) {
    return (
        <div>
            <NavBar/> 
            <section className={styles.home_container}>
                <h1>Contato</h1>
                <p>Conteúdo da página</p>
            </section>
              <Footer />  
        </div>
    )   
}
export default Contato