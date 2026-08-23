import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Screen1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      
      {/* Puedes cambiar la URL por una imagen local usando require('./ruta-imagen.png') */}
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2920/2920326.png' }} 
        style={styles.image} 
      />
      
      <Button 
        title="Acceder" 
        onPress={() => router.push('/actividad/division')} 
      />
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
});