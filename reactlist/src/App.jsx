import { useEffect, useState } from 'react'

import './App.css'
import editIcon from "./assets/edit-icon.ssvg.svg"
import trashIcon from "./assets/trash-icon.svg"
import axios from 'axios'
function App() {
  //states e variaveis
  const [tasktlist, setTasklist] = useState([])

  const [taskValue, setTaskValue] = useState("")

  const [editMode, setEditMode] = useState(false)

  const [idToEdit, setIdToEdit] = useState(0)
  //funcoes e effcts//modo de edição true / false


  //Read(GET)
  const getTasks = async () =>{

    try {
      const APIReturn = await axios.get("http://localhost:3000/takspoin")
      const dataAPI = await APIReturn.data
      setTasklist(dataAPI)
    } catch (error) {
      
    }
  }

  //Create(POST)
  const createTask = async (e) =>{
    //parar/capturar o evento de submit do formulário
    e.preventDefault()

    //validar o formulário
    if(taskValue.trim().length == 0){
      alert('Digite uma tarefa')
      return false
    }

    //cadastrar/post os dados(try/catch)
    try {
       await axios.post("http://localhost:3000/takspoin",
         { descricao: taskValue })
      //limpar campo de input
      setTaskValue("")
      //recarregar os dados na tela(getTask)
      getTasks()
    } catch (error) {
      console.error(error)
      alert('Erro ao cadastrar tarefa')
    }
  }

  //Create(PUT)
  const putTask = (taskItem) =>{
    //legar os dados para o formulário (setTAskValue)
    setTaskValue(taskItem.descricao)
    //sinaizar o formulário que é pra eidtar e ao ìnves de cadastrar (setEditMode)
    setEditMode(true)
    //preencher o id do item a ser editado (setIdToEdit)
    setIdToEdit(taskItem.id)
   }

   const confirmPutTask = async (e) => {
    e.preventDefault()
    //validar o form
    if(taskValue.trim().length == 0){
      alert('Digite uma tarefa')
      return false
    }

    try {
      axios.put(`http://localhost:3000/takspoin/${idToEdit}`,
      { descricao: taskValue })
      alert('Tarefa editada com sucesso')
      getTasks()

      //limpar o formulário
      setTaskValue("")
      setEditMode(false)
      setIdToEdit(0)
    } catch (error) {
      alert('Erro ao editar tarefa')
    }
   };

  //Create(DELETE)
  const deleteTask = async(taskItem) =>{

    const querApagar = confirm(`Deseja realmente apagar a tarefa? '${taskItem.descricao}'`)

    if(!querApagar)
      return false
    

    try {
    await axios.delete(`http://localhost:3000/takspoin/${taskItem.id}`)
    
      getTasks()
    } catch (error) {
    }
  }

  /*MONTAGEM DO COMPONENTE*/
  useEffect(()=>{
    getTasks()
  }, [])

  return (
<>
    <header className='header-section'>
      <h1 className='header-section__title'>React List</h1>
    </header>
    <main className='body-section'>

      <form action="" className="cad-task" onSubmit={editMode ? confirmPutTask : createTask}>

        <input type="text"
         className="cad-task__entry" 
         placeholder='Adicione uma tarefa'
         value={taskValue}
         onChange={(e) => setTaskValue(e.target.value)} />

        <button className="cad-task__btn-confirm">Adicionar</button>
        {
          editMode && (
            <button 
            className="cad-task__btn-cancel"
            type='button'
            onClick={() => {
              //limpar o formulário
              setTaskValue("")
              setEditMode(false)
              setIdToEdit(0)
            }}
            >Cancelar</button>)
        }
      
      </form>
        <section className='cardlist'>
          {tasktlist.map((task) => {
              return(
           <article className="cardtask" key={task.id}>
            
            <p className="cardtask__task-text"> {task.descricao} </p>
            <div className='cardtask__icon-box'>
            <div className="cardlist__icon">
              <img src={editIcon} 
              alt="Imagem de uma caneta - ação editar"
              onClick={() =>{
                putTask(task)
              }} />
            </div>

            <div className="cardlist__icon">

              <img src={trashIcon}
               alt="imagem de uma lixeira - ação excluir tarefa" 
               onClick={()=>{
                deleteTask(task)
               }}/>
               
            </div>
            </div>
          </article>
              );
            })
          }
          

          
        </section>

    </main>

    <footer className='footer-section'>
      <p className='footer-section__right-text'>2026 React List - Todos os direitos reservados</p>
    </footer>
    </>
  )
}

export default App
