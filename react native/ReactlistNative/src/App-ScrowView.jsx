import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export default function App() {
  return (

    <SafeAreaProvider >
      <SafeAreaView style={styles.safeArea} 
      contentContainerStyle={styles.content}>

      <ScrollView style={styles.container} >
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur consequat sapien, ut placerat ex. Morbi odio nulla, gravida a lorem sit amet, placerat volutpat augue. Quisque nec eros at dolor tincidunt aliquam id a lorem. Curabitur eget nisl magna. Fusce risus neque, mattis ut vehicula et, iaculis in sapien.  </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur consequat sapien, ut placerat ex. Morbi odio nulla, gravida a lorem sit amet, placerat volutpat augue. Quisque nec eros at dolor tincidunt aliquam id a lorem. Curabitur eget nisl magna. Fusce risus neque, mattis ut vehicula et, iaculis in sapien.  </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur consequat sapien, ut placerat ex. Morbi odio nulla, gravida a lorem sit amet, placerat volutpat augue. Quisque nec eros at dolor tincidunt aliquam id a lorem. Curabitur eget nisl magna. Fusce risus neque, mattis ut vehicula et, iaculis in sapien.  </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur consequat sapien, ut placerat ex. Morbi odio nulla, gravida a lorem sit amet, placerat volutpat augue. Quisque nec eros at dolor tincidunt aliquam id a lorem. Curabitur eget nisl magna. Fusce risus neque, mattis ut vehicula et, iaculis in sapien.  </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur consequat sapien, ut placerat ex. Morbi odio nulla, gravida a lorem sit amet, placerat volutpat augue. Quisque nec eros at dolor tincidunt aliquam id a lorem. Curabitur eget nisl magna. Fusce risus neque, mattis ut vehicula et, iaculis in sapien.  </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur consequat sapien, ut placerat ex. Morbi odio nulla, gravida a lorem sit amet, placerat volutpat augue. Quisque nec eros at dolor tincidunt aliquam id a lorem. Curabitur eget nisl magna. Fusce risus neque, mattis ut vehicula et, iaculis in sapien.  </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur consequat sapien, ut placerat ex. Morbi odio nulla, gravida a lorem sit amet, placerat volutpat augue. Quisque nec eros at dolor tincidunt aliquam id a lorem. Curabitur eget nisl magna. Fusce risus neque, mattis ut vehicula et, iaculis in sapien.  </Text>
 
     
      <StatusBar style="auto" />
       </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text:{
    fontSize: 30,
    marginBottom:20
  }
});
