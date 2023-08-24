import React, {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

function CaculoCombustivel(){
  const resultado = km / combustivel;
  alert('O consumo do seu carro é' + resultado + 'Litros');
}

const [km, setkm] = useState('');
const [combustivel, setcombustivel] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Consumo de combustivel
      </Text>

      <TextInput style={styles.input}
      placeholder="Digite os Km rodados"
      placeholderTextColor='#000000'
      keyboardType="numeric"
      onChangeText={(km)=>setkm(km)}
      />

      <TextInput style={styles.input}
      placeholder="Digite a quantidade de combustível"
      placeholderTextColor='#000000'
      keyboardType="numeric"
      onChangeText={(combustivel)=>setcombustivel(combustivel)}
      />

      <TouchableOpacity style={styles.btn} onPress={CaculoCombustivel}>
      <Text style={styles.textbtn}> Calcular o Consumo </Text>
      </TouchableOpacity>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: 'center',
    backgroundColor: '#800000',
    padding: 8,
  },
  
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#E9967A',
    borderRadius:10,    
    marginBottom: 60,
    padding: 15,
  },
  
  btn:{
    alignItems: 'center',
    backgroundColor: '#E9967A',
    padding: 15,
    borderRadius:10,
    margin: 15,
    marginTop: 50,
  },

  textbtn: {
    fontSize:24,
    color: '#000000',
    fontWeight: 'bold',
  },

  input: {
    fontSize: 17,
    padding: 20,
    backgroundColor: '#40E0D0',
    borderRadius: 10,
    margin: 15,
  }


});

