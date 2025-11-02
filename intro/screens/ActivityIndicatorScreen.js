

import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

export default function ActivityIndicatorScreen() {
  const [loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };
  if(loading){
    return(
    <View style={styles.container}>
      <View >
        <ActivityIndicator 
          size="large" 
          color="#7eabdfff" 
          animating={true}
          hidesWhenStopped={true}
        />
        <Text style={styles.cargando}>Cargando.....</Text>
      </View>
    </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ActivityIndicator</Text>
      <Button color='#64a9baff' title='Iniciar carga' onPress={startLoading}/>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ecf1f4ff',

  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  cargando:{
    fontSize:16,
    fontWeight:'normal',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    color:'#483de3ff',
  },
})