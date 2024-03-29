import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './App.css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [name, setName] = useState("");

  function getItem(){
    AsyncStorage.getItem("name")
      .then((value) => {
        setName(value)
      })
  }

  function setItem(value: string){
    AsyncStorage.setItem("name", value)
    getItem()
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCapitalize='words'
        testID="textInput"
        onChangeText={e => setItem(e)}
        placeholder='Type your name'
      />

      <Text
        testID="nameText"
        style={styles.nameTxt}
      >
        {name}
      </Text>
    </View>
  )
}