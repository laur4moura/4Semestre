import { View,  StatusBar } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Styles } from "./Styles"
import Header from "./components/header/Header"
import { FormTask } from "./components/formtask.jsx/FormTaks"
import { TaskList } from "./components/tasklist/TaskList"
import { TaskItem } from "./components/taskitem/TaskItem"
import { Footer } from "./components/footer/Footer"

function App() {
    return(
       <SafeAreaProvider>
            <SafeAreaView style={Styles.safeArea}>
                <View style={Styles.container}>
                <Header />
                    <FormTask />
                    <TaskList />
                    <StatusBar style="auto" />
                </View>
                <Footer />
            </SafeAreaView>
       </SafeAreaProvider>
    )
}


export default App