import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomInput from '../componentes/CustomInput'; // Importamos el componente reutilizable

export default function Screen2() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const manejarDivision = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Validaciones solicitadas en la actividad
    if (n1 === 0 && n2 === 0) {
      setResultado('INDETERMINACIÓN');
    } else if (n2 === 0) {
      setResultado('NO EXISTE DIVISIÓN PARA CERO');
    } else if (isNaN(n1) || isNaN(n2)) {
      setResultado('Por favor, ingresa números válidos');
    } else {
      setResultado(`Resultado: ${n1 / n2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de División</Text>
      
      <CustomInput 
        placeholder="Campo número 1" 
        value={num1} 
        onChangeText={setNum1} 
      />
      <CustomInput 
        placeholder="Campo número 2" 
        value={num2} 
        onChangeText={setNum2} 
      />
      
      <Button title="Dividir" onPress={manejarDivision} />
      
      <Text style={styles.resultadoTexto}>{resultado}</Text>
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
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  resultadoTexto: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});