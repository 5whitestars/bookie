import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Input} from './screens/Input'
import {Home} from './screens/Home'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    barStyle : 'dark-content',
    hidden : false,
  },
  
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <NotesInput data={data} />
    //   <StatusBar/>
    // </View>
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Review Input" component={Input} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

