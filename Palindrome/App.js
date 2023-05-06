import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [word, setWord] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [resultado, setResultado] = useState('');

  const checkPalindrome = () => {
    const reversedWord = word.toLowerCase().split('').reverse().join('');
    setIsPalindrome(word.toLowerCase() === reversedWord);
    setResultado((word.toLowerCase() === reversedWord)?"é um palíndromo":"não é um palíndromo");
  };
  const handleChangeText = (inputText) => {
    setWord(inputText);
    setResultado('');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Esta palavra é palíndrome?</Text>
      <Image source={require('./assets/logo.png')}/>
      <Text style={styles.subtitulo}>Uma palavra palíndrome é aquela em ela escrita na forma normal ou invertida, é exatamente igual.</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma palavra"
        onChangeText={(text) => handleChangeText(text)}
        value={word}
      />
      <TouchableOpacity style={styles.button} onPress={checkPalindrome}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
      {isPalindrome && (
        <Text style={styles.resultText}>{`${word} ${resultado}`}</Text>
      )}
      {!isPalindrome && isPalindrome !== null && (
        <Text style={styles.resultText}>{`${word} ${resultado}`}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  titulo: {
    padding: 30,
    fontSize: 24,
    color: "green"
  },
  subtitulo: {
    padding: 30,
    fontSize: 14,
    color: "blue",
    fontStyle: "italic"
  }
});
