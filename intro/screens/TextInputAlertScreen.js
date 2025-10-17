import { Text, StyleSheet, View ,TextInput, Button, Alert } from 'react-native'
import React, { useState} from 'react'

export default function TextInputAlertScreen() {

    const [nombre, setNombre] = useState('');

    // con esta ffuncion mostramos la alerta 
    const mostrarAlerta = () => {
        if(nombre.trim() === ''){
            Alert.alert('Error', 'Ingresa tu nombre');
        }else{
            Alert.alert('HOLA', `BIENVENIDO/A, ${nombre}!`);
        }
    };

    return(
        <View style={styles.container}> 
            <Text style={styles.title}>TextInput & Alert</Text>
            <Text style={styles.label}>Ingresa tu nombre:</Text> 
            <TextInput
                style={styles.input}// podemos llamarlo input para mejor practica
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <Button color="#2ab49dff" title="Mostrar saludo" onPress={mostrarAlerta} />
        </View>
    );
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: '#cdf3ecff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   title:{
    fontFamily:'Times New Roman',
    fontSize:40, 
    color:'black', 
    fontWeight:'bold', 
    fontStyle:'italic', 
    textDecorationLine:'underline',
   },
   label:{ // label=etiqueta
    fontSize: 16,
    marginBottom: 20,
    marginTop:15,
   },
   input:{ // campo donde se escribe
    borderWidth: 1, // margen del boton
    borderColor: '#106f59ff', //color del borde 
    borderRadius: 8, //redondea el las esquinas del contenedor 
    padding: 10, // espacio del texto en los bordes
    marginBottom: 15, // separa del elemento de abajo
    backgroundColor: '#fff', // colo de fondo del input 
   },
});