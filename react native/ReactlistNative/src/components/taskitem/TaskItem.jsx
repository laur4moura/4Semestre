import { Text, View } from "react-native"
import { TaskItemStyles } from "./TaskItemStyle"


export const TaskItem = () =>{
    return(
        <View style={TaskItemStyles.cardbox}>
            <Text style={TaskItemStyles.taskTitle}>Tarefa 1</Text>
        </View>
    )
}