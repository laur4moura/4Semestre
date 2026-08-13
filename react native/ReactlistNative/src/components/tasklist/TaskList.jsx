import { TaskListStyles } from "./TaskListStyle"
import { ScrollView } from "react-native"
import { TaskItem } from "../taskitem/TaskItem"
import { useEffect, useState } from "react"
import { TaskContext } from "../../context/TaskContext"
import { useContext } from "react"



export const TaskList = () =>{
    const {listagemTarefas, getTasks, postTasks, deleteTasks} = useContext(TaskContext)//state global

    useEffect(()=>{
        getTasks()
    })
    
    



    return(
        <ScrollView style={TaskListStyles.taskListContainer}>
            {
                listagemTarefas.map((tarefa)=>{
                    return(

                        <TaskItem key={tarefa.id } id= {tarefa.id} descricao={tarefa.descricao} />
                    )
                })
            }
         
        </ScrollView>
    )
}
