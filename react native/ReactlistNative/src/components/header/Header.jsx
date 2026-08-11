import { View, Text } from "react-native";
import { HeaderStyles } from "./HeaderStyles";
const Header = () => {
    return(
        <View style={HeaderStyles.header}>
            <Text style={HeaderStyles.headerTitle}>React List</Text>
        </View>
    )
}

export default Header