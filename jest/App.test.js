import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react-native';

describe('shows mainly components', () => {
  it('TextInput', () => {
    const { getByTestId } = render(<App />)
    const textInput = getByTestId("textInput")
    expect(textInput).toBeTruthy()
  })
})