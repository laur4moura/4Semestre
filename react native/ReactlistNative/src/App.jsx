import { View,  StatusBar } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Styles } from "./Styles"
import Header from "./components/header/Header"
import { FormTask } from "./components/formtask.jsx/FormTaks"
import { Footer } from "./components/footer/Footer"
import { TaskList } from "./components/tasklist/TaskList"
import { TaskContext } from "./context/TaskContext"
import { TaskProvider } from "./context/TaskContext"

function App() {
    return(
       <SafeAreaProvider>
            <SafeAreaView style={Styles.safeArea}>
                <TaskProvider>
                <View style={Styles.container}>
                <Header />
                    <FormTask />
                    <TaskList/>
                    <StatusBar style="auto" />
                </View>
                </TaskProvider>
                <Footer />
            </SafeAreaView>
       </SafeAreaProvider>
    )
}


export default App