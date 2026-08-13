import { View} from "react-native"
import{ FormTaskStyles } from "./FormTaskStyles"
import { TextInput } from "react-native"
import { TouchableOpacity } from "react-native"
import { Text } from "react-native"
import { useContext, useState } from "react"
import { Alert } from "react-native"
import { TaskContext } from "../../context/TaskContext"


export const FormTask = () => {
    const {postTasks, getTasks, taskValue, deleteTasks,setTaskValue, editMode, setEditMode, putTasks } = useContext(TaskContext)
    
    
    const saveTask = () =>{
        console.log(`Texto digitado: ${taskValue}`)

        postTasks(taskValue)
        getTasks()

        Alert.alert("Adicionar Tarefa",
                    "Tarefa Adiconada",[
                    {text: "OK"},
                    {text: "Cancelar", onPress: () => setTaskValue("Okk pressed")}
             ])
    }


    return(
        <View style={FormTaskStyles.formTaskBox}>
            <TextInput 
            style={FormTaskStyles.taskInputName}
            placeholder="Adicione da Tarefa"
            value={taskValue}
            onChangeText={(textoDigitado) => 
                {setTaskValue(textoDigitado)}}
             />
             
            <TouchableOpacity
            style={FormTaskStyles.taskButton}
            onPress={() =>
                 {
                    if (editMode) {
                        putTasks()
                    } else {
                        saveTask()
                    }
                    
                   }}
            >
                
                <Text style={FormTaskStyles.taskButtonText}
                >Salvar</Text>
                </TouchableOpacity>

                {
                editMode && (
                <TouchableOpacity style={FormTaskStyles.taskButton} onPress={() => {setEditMode(false), setTaskValue("")}}>
                
                <Text style={FormTaskStyles.taskButtonText}>Cancelar</Text>
                </TouchableOpacity>
                )}

        </View>
    )
}