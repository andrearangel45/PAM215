
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
                <View>
                    <Text>Menu de practicas</Text>
                    <Button onPress={() => setScreen('contador')} title='Pract:Contador' />
                    <Button onPress={() => setScreen('botones')} title='Pract:Buttons' />
                    <Button onPress={() => setScreen('textin')} title='Pract:Text input y Alert' />
                    <Button onPress={() => setScreen('image')} title='Pract:ImageBackground y SlapshScreen' />
                    <Button onPress={() => setScreen('scroll')} title='Pract:ScrollView' />
                    <Button onPress={() => setScreen('activity')} title='Pract:ActivityIndicator' />
                    <Button onPress={() => setScreen('flatlist')} title='Pract:FlatList y Section List' />
                    <Button onPress={() => setScreen('modal')} title='Pract:Modal' />
                    <Button onPress={() => setScreen('butsheet')} title='Pract:Buttom Sheet' />
                    
                </View>
            );
        default:
            return null;
    }
    
}

const styles = StyleSheet.create({
    
})


