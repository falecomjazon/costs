import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjetoForm.module.css'

function ProjetoForm({btnText, handleSubmit, projectData}) {

    const [categorias, setCategorias] = useState([])
    
    const [project,setProject] = useState(projectData || {})

     useEffect(()=>{
        fetch( 'http://localhost:5000/categorias',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setCategorias(data)
        })
        .catch((err) => console.log(err))
    },[])
 
  const submit = (e)=>{
    e.preventDefault()
   // console.log(project)
    handleSubmit(project)
  }
 
  function handleChange(e) {
    setProject({...project,[e.target.name]:e.target.value})
    console.log(project)
  }
  function handleChangeSelectCategory(e) {
    setProject({
        ...project,
        category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
  }
    return (
        <form onSubmit={submit} className={styles.form}>

          
            <Input 
               type="text"
               name="nomeprojeto"
               text="Nome do projeto"
               placeholder="Insira o nome do projeto"
               handleOnChange={handleChange}
               value={project.nomeprojeto? project.nomeprojeto : ''}
               />
            <Input 
               type="number"
               name="orcamento"
               text="Valor do Orçamento do projeto"
               placeholder="Insira orçamento do projeto"
               handleOnChange={handleChange}
               value={project.orcamento ? project.orcamento : ''}
               />
            <Select 
               name="categoria_id" 
               text="Selecione a categoria"
               options={categorias}
               handleOnChange={handleChangeSelectCategory}
               value={project.category ? project.category.id : ''}
               />
            <SubmitButton 
                name="btn_cadastrar" 
                value={btnText}
                />
        </form>
    )
}
export default ProjetoForm