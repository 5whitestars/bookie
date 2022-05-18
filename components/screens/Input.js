import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import produce from 'immer';

const Input = props => {
  props.data.map(note => <div>{note.text}</div>)

  const initialData = [{text: 'Loading Notes ... '}]
  const [data, setData] = useState(initialData)

  const handleClick = () => {
    const text = document.querySelector('#noteinput').value.trim();
    if (text) {
      const nextState = produce(data, draftState => {
        draftState.push({ text });
      });
      document.querySelector('#noteinput').value = '';

      if (typeof window !== 'undefined') {
        AsyncStorage.setItem('data', JSON.stringify(nextState));
      }
      setData(nextState);
    }
    }

  useEffect(() => {
    if (typeof window !== undefined) {
      const getData = async() => {
        try {
          return await AsyncStorage.getItem('data')
        } catch(e) {
          // read error
        }
        console.log('data retrieved')
      }

      if (getData !== '' && getData !== null) {
        const setData = null;
        return setData = async (value) => {
          try {
            await AsyncStorage.setItem('key', value)
          } catch(e) {
            // save error
          }
          console.log('data set')
        }
      }
      return setData([]);
  }})



  return(
    <>
      <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter a new note" />
      <button onClick={() => handleClick()}>Add note</button>
      <Input data={data} />
      
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Input Page</Text>
      </View> */}

    </>
  )
};

export default Input
