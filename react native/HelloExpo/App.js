import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        
    <View style={styles.container}>
      <Text style={styles.teste}>Para Amor:</Text>
      <Text style={styles.textoHello}>Eu te amo! É uma dádiva poder amar você tanto e sempre</Text>
      <Text>saiba que sou mais feliz ao seu lado.</Text>
      <StatusBar style="auto" />
    </View>
      </SafeAreaView>
    </SafeAreaProvider>





  );
}







// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
