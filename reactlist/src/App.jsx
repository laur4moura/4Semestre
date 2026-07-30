import { useState } from 'react'

import './App.css'
import editIcon from "./assets/edit-icon.svg.svg"
import trashIcon from "./assets/trash-icon.svg.svg"
function App() {
  //states e variaveis
  const [tasktlist, setTasklist] = useState([
    {id:1, descricao: "Revisar HTML Semântico"},
    {id:2, descricao: "Revisar ReactJS"},
    {id:3, descricao: "Revisar ReactJS"},
    

  ])
  //funcoes e effcts

  return (
<>
    <header className='header-section'>
      <h1 className='header-section__title'>React List</h1>
    </header>
    <main className='body-section'>

      <form action="" className="cad-task">

        <input type="text"
         className="cad-task__entry" 
         placeholder='Adicione uma taefa' />

        <button className="cad-task__btn-confirm">Adicionar</button>
      </form>
        <section className='cardlist'>
          {tasktlist.map((task) => {
              return(
           <article className="cardtask" key={task.id}>
            
            <p className="cardtask__task-text"> {task.descricao} </p>
            <div className='cardtask__icon-box'>
            <div className="cardlist__icon">
              <img src={trashIcon} alt="imagem de uma lixeira - ação excluir tarefa" />
            </div>
            <div className="cardlist__icon">
              <img src={editIcon} alt="Imagem de uma caneta - ação editar" />
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
