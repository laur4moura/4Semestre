import { Text, View } from "react-native"
import { TaskListStyles } from "./TaskListStyle"


export const TaskList = () =>{
    return(
        <View style={TaskListStyles.cardbox}>
            <Text style={TaskListStyles.taskTitle}>Tarefa 1</Text>
        </View>
    )
}