import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'nome': ''
    }
  }

  componente = () => {
    AsyncStorage.getItem('nome').then(
      (valor) => this.setState({
        'nome': valor
      })
    )
  }

  setNome = (valor) => {
    AsyncStorage.setItem('nome', valor);
    this.setState({
      'nome': valor
    })
  }

  render(){
    return(
      <View style={estilizacao.container}>
        <TextInput
          style={estilizacao.textInput}
          autoCapitalize='words'
          onChangeText={this.setNome}
          placeholder='Digite seu nome'
        />
        <Text style={estilizacao.textoNome}>{this.state.nome}</Text>
      </View>
    )
  }
}

export default App;

const estilizacao = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    padding: 5
  },

  textoNome: {
    color: 'black',
    fontWeight: 'bold'
  }
})