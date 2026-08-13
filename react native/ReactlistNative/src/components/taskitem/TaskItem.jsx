import { Alert, Text, View } from "react-native"
import { TaskItemStyles } from "./TaskItemStyle"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"


//recebe o objeto do item como prop
export const TaskItem = ({ id, descricao }) => {
  const { deleteTasks, putTaskPreview, setEditMode } = useContext(TaskContext)
  const deleteTaskConfirm = () => {
    Alert.alert(
      "Apagar",
      `Você quer apagar a tarefa "${descricao}"?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            deleteTasks(id)
          },
        },
      ]
    )
  }
  return (
    <View style={TaskItemStyles.cardbox}>

      <Text style={TaskItemStyles.carText}>
        {descricao}
      </Text>

      <View style={TaskItemStyles.buttonsContainer}>

        <TouchableOpacity style={TaskItemStyles.editButton}
        onPress={() => {
          putTaskPreview({id,descricao})
        }}
        
        
        >
          <Image
            source={require("../../../assets/Edit.png")}
            style={TaskItemStyles.icon}
            onPress={() => setEditMode(true)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={TaskItemStyles.deleteButton}
          onPress={deleteTaskConfirm}
        >
          <Image
            source={require("../../../assets/Trash.png")}
            style={TaskItemStyles.icon}
          />
        </TouchableOpacity>

      </View>

    </View>
  )
}