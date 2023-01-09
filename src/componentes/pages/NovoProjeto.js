/* import Footer from "../layout/Footer"
import NavBar from "../layout/NavBar" */
//import {useHistory} from 'react-dom'
//import { useHistory } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import styles from './NovoProjeto.module.css'
import ProjetoForm from '../projeto/ProjetoForm'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
function NovoProjeto() {

    //const history = useHistory()
    const navigator = useNavigate()

    function createPost(project) {
        //initialize cost and services
        project.cost = 0
        project.services = []   
        fetch("http://localhost:5000/projetos",{
            method: 'POST',
            headers : {'Content-type':'application/json',},
            body:JSON.stringify(project),
        })
        .then((resp)=>resp.json())
        .then((data)=> {
           // console.log(data)
            //redirect
           // navigator("/projetos",{message: 'Projeto criado com sucesso!'})
            navigator("/projetos",{state: {message: 'Projeto criado com sucesso!'}})
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div>
        <NavBar/>
        <div className={styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
        <Footer/>
        </div>
    )   
}
export default NovoProjeto