import { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

export default function SumOfTwoNumbers() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  return (
    <View style={{ paddingStart: 20, marginTop: 50 }}>
      <Text style={[styles.text, { fontSize: 20 }]}>Enter two numbers :</Text>
      <TextInput
        style={styles.textbox}
        editable
        placeholder="Enter First Number"
        placeholderTextColor="#7f7f7f"
        keyboardType="numeric"
        onChangeText={(value) => setFirstNumber(value)}
      />
      <TextInput
        style={styles.textbox}
        editable
        placeholder="Enter Second Number"
        placeholderTextColor="#7f7f7f"
        keyboardType="numeric"
        onChangeText={(value) => setSecondNumber(value)}
      />

      <Text style={styles.text}>
        Addition of {firstNumber} and {secondNumber} is{' '}
        {(parseInt(firstNumber) + parseInt(secondNumber)).toString()}
      </Text>
      <Text style={styles.text}>
        Subtraction of {firstNumber} and {secondNumber} is{' '}
        {(parseInt(firstNumber) - parseInt(secondNumber)).toString()}
      </Text>
      <Text style={styles.text}>
        Multiplication of {firstNumber} and {secondNumber} is{' '}
        {(parseInt(firstNumber) * parseInt(secondNumber)).toString()}
      </Text>
      <Text style={styles.text}>
        Division of {firstNumber} and {secondNumber} is{' '}
        {(parseInt(firstNumber) / parseInt(secondNumber)).toFixed(3).toString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textbox: {
    width: 200,
    height: 35,
    color: '#333333',
    paddingHorizontal: 12,
    marginTop: 8,
    backgroundColor: '#33ccff4D',
    borderColor: '#00608080',
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    fontSize: 17,
    color: '#00394d',
    letterSpacing: 1,
    marginHorizontal: 5,
    marginTop: 8,
  },
});
