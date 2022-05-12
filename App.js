import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import NotesInput from './components/NotesInput';
import {Input, Home} from './components/screens'

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

