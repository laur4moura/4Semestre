import { createContext } from "react";
import { useState } from "react";
import api from "../services/FakeAPIService";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setListagemTarefas] = useState([])
    const [taskValue, setTaskValue] = useState("")
    const [editMode, setEditMode ] = useState(false)
    const [idToEdit, setIdToEdit] = useState(0)

    const getTasks = async () => {
        try {
            const APIReturn = await api.get("/dados")
            const APiData = await APIReturn.data
            setListagemTarefas(APiData)

        } catch (error) {
            console.log(error)
        }
    }

    const postTasks = async (taskValue) => {
        try {
            await api.post("dados", { descricao: taskValue })



        } catch (error) {
            console.log("Deu ruim na chamada da api")
            console.log(error)
        }
    }

    const putTasks = async() => {
        try {
            await api.put(`/dados/${idToEdit}`, 
                {descricao: taskValue}
            )
            await getTasks()
            setIdToEdit(0)
            setTaskValue("")
            setEditMode(false)
        } catch (error) {
            console.log("Erro ao editar os dados")
            console.log(error)
        }
    }

    const putTaskPreview = (tarefa) => {
        setTaskValue(tarefa.descricao)
        setEditMode(true)
        setIdToEdit(tarefa.id)
    }

    const deleteTasks = async (id) => {
        try {
            await api.delete(`/dados/${id}`)
            await getTasks()
        } catch (error) {
            console.log("Problemas ao apagar na api")
            console.log(error)
        }

    }

    return (
        <TaskContext.Provider value={{
            listagemTarefas,
            setListagemTarefas,
            getTasks,
            postTasks,
            putTasks,
            putTaskPreview,
            deleteTasks,
            editMode,
            setEditMode,
            setIdToEdit,
            idToEdit,
            setTaskValue,
            taskValue,
        }}>
            {children}
        </TaskContext.Provider>

    )
}