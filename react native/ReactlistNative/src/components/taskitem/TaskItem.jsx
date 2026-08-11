import { Text, View } from "react-native"
import { TaskItemStyles } from "./TaskItemStyle"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"


//recebe o objeto do item como prop
export const TaskItem = ({ dados: {id, descricao}}) =>{
    return(
        <View style={TaskItemStyles.cardbox}>

      <Text style={TaskItemStyles.carText}>
       {id} - {descricao}
      </Text>

      <View style={TaskItemStyles.buttonsContainer}>

        <TouchableOpacity style={TaskItemStyles.editButton}>
          <Image
            source={require("../../../assets/Edit.png")}
            style={TaskItemStyles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={TaskItemStyles.deleteButton}>
          <Image
            source={require("../../../assets/Trash.png")}
            style={TaskItemStyles.icon}
          />
        </TouchableOpacity>

      </View>

    </View>
    )
}