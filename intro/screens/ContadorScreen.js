
// 1. imports: Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';
import React, {useState} from 'react';

// 2. Main: Zona de componentes
export default function App() {

  const[contador,setContador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="#23ba35ff" title='Incrementar'onPress={()=>setContador(contador+1)}></Button>
      <Button color="#d40000ff" title='Quitar'onPress={()=>setContador(contador-1)}></Button>
      <Button color="#e6d35cff" title='Reiniciar'onPress={()=>setContador(0)}></Button>
      </View>
      <StatusBar style="auto" /> 

    </View>
  );
}

// 3. Estilos: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9e8e1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily:'Times New Roman',// deine el tipo de letra
    fontSize:30, // define el tamano del texto
    color:'olive', // define el color del texto
    fontWeight:'bold', // aplica el de negritas podemos usar valores numericos
    fontStyle:'italic', 
    textDecorationLine:'line-through', // nos pone una linea en alguna posicion del texto
  },
  texto2:{
    fontFamily:'Courier',
    fontSize:40,
    color:'#2fd145ff',
    fontWeight:'500',
    textDecorationLine:'underline',// linea debajo del texto
  },
  contenedorBotones:{ // nuestros botones tienen que estar dentro de View
    marginTop:15, // margen en la parte de arriba
    flexDirection:'row', // orden de botones 
    gap:15, // separacion entre elementos funciona para filas y columnas 
  },

});
