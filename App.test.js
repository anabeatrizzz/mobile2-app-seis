import React from 'react';
import App from './App.tsx';
import { render, fireEvent, act } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('shows mainly components', () => {
  it('TextInput', () => {
    const { getByTestId } = render(<App />)
    const textInput = getByTestId("textInput")
    expect(textInput).toBeTruthy()
  })
})

describe('value is saved', () => {
  it('calls AsyncStorage while typing', async() => {
    const { getByTestId } = render(<App />)
    const textInput = getByTestId("textInput")
    const nameTxt = getByTestId("nameText")

    await act(async () => {
      fireEvent.changeText(textInput, {
        target: "Ana"
      })
    })

    await AsyncStorage.setItem("name", "Ana");

    expect(nameTxt).toBeTruthy()
    expect(AsyncStorage.getItem).toBeCalledWith('name');
  })
})