import { View} from "react-native"
import{ FormTaskStyles } from "./FormTaskStyles"
import { TextInput } from "react-native"
import { TouchableOpacity } from "react-native"
import { Text } from "react-native"
import { useState } from "react"
import { Alert } from "react-native"


export const FormTask = () => {

    const [taskValue, setTaskValue] = useState("")
    
    const saveTask = () =>{
        console.log(`Texto digitado: ${taskValue}`)
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
                 {saveTask()}}
            >
                
                <Text style={FormTaskStyles.taskButtonText}
                >Adicionar Tarefa</Text>
                </TouchableOpacity>
        </View>
    )
}