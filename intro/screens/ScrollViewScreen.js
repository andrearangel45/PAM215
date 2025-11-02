import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import React, { useState, useRef } from 'react'

export default function ScrollViewScreen() {
  const scrollRef = useRef();
  const irAlFinal = () =>{
    scrollRef.current.scrollToEnd({animated: true});
  }
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
    >
      <Text style={styles.titulo}>Practica ScrollView </Text>
      <Text style={styles.titulo2}>Ejemplo del desplazamiento vertical</Text>

      <View>
        <Button
          color={ '#f4d76eff'}
          title='Ir al final'
          onPress={irAlFinal}
        />
      </View>
      <View style={styles.elemetos}>
        <Text style={styles.texto}>Elemento 1</Text>
      </View>

      <View style={styles.elemetos}>
        <Text style={styles.texto}>Elemento 2</Text>
      </View>

      <View style={styles.elemetos}>
        <Text style={styles.texto}>Elemento 3</Text>
      </View>

      <View style={styles.elemetos}>
        <Text style={styles.texto}>Elemento 4</Text>
      </View>

      <View style={styles.elemetos}>
        <Text style={styles.texto}>Elemento 5</Text>
      </View>

      <Text style={styles.titulo2}>Ejemplo de desplazamiento horizontal</Text>
      <ScrollView
        style={styles.scrollhorizontal}
        horizontal
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={true}
      >

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 1</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 2</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 3</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 4</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 5</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 6</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 7</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 8</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 9</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 10</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 11</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.texto}>Cuadro 12</Text>
        </View>

      </ScrollView>

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#eec950ff',
  },
  content:{
    padding: 20,
    paddingBottom: 40,
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#530606ff',
    textAlign: 'center',
  },
  titulo2:{
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  elemetos:{
    width: '100%',
    height: 100,
    backgroundColor: '#e1952aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  elementos2:{
    width: 120,
    height: 120,
    backgroundColor: 'rgba(151, 79, 23, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  texto:{
    fontSize:16,
    fontFamily:'Courier',
    color: '#000000ff',
    fontWeight: '900',
    textDecorationLine: 'underline',

  },
  scrollhorizontal:{
    marginVertical: 10,
    width: '100%',
  },
})