
import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import ImageScreen from './ImageScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import ButtomScreen from './ButtomScreen';
export default function MenuScreen(){

    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'contador':
            return <ContadorScreen />;
        case 'botones':
            return <BotonesScreen />;
        case 'textin':
            return <TextInputAlertScreen />;
        case 'image':
            return <ImageScreen />;
        case 'scroll':
            return <ScrollViewScreen />;
        case 'activity':
            return <ActivityIndicatorScreen />;
        case 'flatlist':
            return <FlatListScreen />;
        case 'modal':
            return <ModalScreen />;
        case 'butsheet':
            return <ButtomScreen />;
        case 'menu':
            return (
                <View style={styles.container}>
                    <Text style={styles.titulo}> - Menu de practicas - </Text>
            
                    <View style={styles.contenedorBotones}>
                    <Button color="#ecb2caff" onPress={() => setScreen('contador')} title='Pract:Contador' />
                    <Button color="#ecb2caff" onPress={() => setScreen('botones')} title='Pract:Buttons' />
                    <Button color="#ecb2caff" onPress={() => setScreen('textin')} title='Pract:Text input y Alert' />
                    <Button color="#ecb2caff" onPress={() => setScreen('image')} title='Pract:ImageBackground y SlapshScreen' />
                    <Button color="#ecb2caff" onPress={() => setScreen('scroll')} title='Pract:ScrollView' />
                    <Button color="#ecb2caff" onPress={() => setScreen('activity')} title='Pract:ActivityIndicator' />
                    <Button color="#ecb2caff" onPress={() => setScreen('flatlist')} title='Pract:FlatList y Section List' />
                    <Button color="#ecb2caff" onPress={() => setScreen('modal')} title='Pract:Modal' />
                    <Button color="#ecb2caff" onPress={() => setScreen('butsheet')} title='Pract:Buttom Sheet' />
                    </View>
                    
                    
                </View>
            );
        default:
            return null;
    }
    
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5e4f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorBotones:{ 
    marginTop:15, 
    flexDirection:'column', 
    gap:15,
  },
  titulo:{
    fontFamily:'Courier',
    fontSize:40,
    color:'#3e0327ff',
    fontWeight:'500',
  },
    
})


