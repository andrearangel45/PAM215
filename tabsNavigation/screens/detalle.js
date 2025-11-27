import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetalleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles Usuario</Text>
      <Text style={styles.subtitle}>Usando Navegacion Stack</Text>
      
      <Button
        title="Regresar a Perfil de Usuario"
        onPress={() => navigation.goBack()}
        color="#3498db"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    color: '#555',
  },
});

export default DetalleScreen;