import { Text, View } from "react-native"
import { FooterStyle } from "./FooterStyle"


export const Footer = () =>{
    return(
        <View style={FooterStyle.cardbox}>
            <Text style={FooterStyle.taskTitle}>Footer</Text>
        </View>
    )
}