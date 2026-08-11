import { TaskListStyles } from "./TaskListStyle"
import { ScrollView } from "react-native"
import { TaskItem } from "../taskitem/TaskItem"
import { useEffect, useState } from "react"


export const TaskList = () =>{

    const [listaTarefas, setListaTarefas] = useState()

    const getTasks = async() => {
        try {
            const APIReturn = await axios.get("http://172.16.2.31:3000/dados")
            const APiData = await APIReturn.data
            setListaTarefas(APiData)
            
        } catch (error) {
            console.log(error)
        }
    }

    const cadTasks =  () => {
        
    }

    const putTasks = () => {
        console.log("Função get em desenvolvimento")
    }

    const deleteTasks = () => {
        console.log("Função get em desenvolvimento")
    }

useEffect(()=>{
    getTasks()
})


    return(
        <ScrollView style={TaskListStyles.taskListContainer}>
            {
                listaTarefas.map((tarefa)=>{
                    return(

                        <TaskItem dados={tarefa} />
                    )
                })
            }
         
        </ScrollView>
    )
}