import styles from'./Projeto.module.css'
import NavBar from "../layout/NavBar";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
function Projeto() {

const {id} = useParams()
const [projeto,setProjeto] = useState([])
useEffect (()=>{
    fetch(`http://localhost:5000/projetos/${id}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
    })
    .then((resp)=>resp.json())
    .then((data)=>{
        setProjeto(data)
    })
    .catch((err)=>console.log(err))
},[id])

    return (
    <div>
        <NavBar/> 
        <p>Projeto {projeto.nomeprojeto}</p>
        <Footer/>
    </div>
    )
}
export default Projeto