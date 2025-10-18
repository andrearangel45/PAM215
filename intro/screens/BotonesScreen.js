import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React, {useState} from 'react';

export default function BotonesScreen() {
    const[esEncendido, cambiarEncendido]=useState(false);
    const[color, cambiarcolor]=useState('yellow')
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Control de luz</Text>

            {/* operador tenario*/}
            <Text style={[styles.luz, {color: esEncendido ? color:'black'}]}>
                {esEncendido ? 'Luz encendida' : 'Luz apagada'}
            </Text>

            <Switch
            value = {esEncendido}
            onValueChange = {() => cambiarEncendido(!esEncendido)}
            trackColor ={{ true: 'yellow', false: 'gray'}}
            ></Switch>
            <View style ={styles.cajaBotones}>
                <Button
                title='Amarillo'
                onPress={() =>esEncendido && cambiarcolor('#d2bc17ff')}
                color='#d2bc17ff'
                ></Button>  

                <Button
                title='Azul'
                onPress={() =>esEncendido && cambiarcolor('#17ccd2ff')}
                color='#17ccd2ff'
                ></Button>

                <Button
                title='Rojo'
                onPress={() =>esEncendido && cambiarcolor('#d21717ff')}
                color='#d21717ff'
                ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#9d9d9dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  titulo: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  luz: {
    fontSize: 25,
    marginBottom: 15,
  }
})