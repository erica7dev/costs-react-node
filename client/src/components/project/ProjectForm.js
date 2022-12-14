import React from 'react'
import Input from '../form/input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { useState, useEffect } from 'react'
import styles from './ProjectForm.module.css'

export default function ProjectForm({btnText, handleSubmit, projectData}) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      setCategories(data)
    })
    .catch(err => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value})
  }

  function handleCategory(e){
    setProject({
      ...project,
       category:{
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text
       },
      })
  }
  
  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        name="name"
        placeholder="Nome do projeto"
        text="Nome do projeto"
        value={project.name}
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        name="budget"
        placeholder="Insira o orçamento total" 
        text="Orçamento do projeto"
        value={project.budget}
        handleOnChange={handleChange}
      />
      <Select 
      name="category_id" 
      text="Selecione a categoria"
      options={categories}
      value={project.category ? project.category.id: ''}
      handleOnChange={handleCategory}
      />
      <SubmitButton text={btnText}/>
    </form>
  )
}
