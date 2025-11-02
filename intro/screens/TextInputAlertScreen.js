import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React,{useState} from 'react'

export default function TextInputAlertScreen() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');

    const mostrarAlerta = () => {
        if(nombre.trim() === '' || password.trim() === '' || telefono.trim()=== ''){
            Alert.alert("Error favor de llenar todos los campos (movil)");
            alert("Favor de llenar todos los campos (web)");
        } else{
            //alert para movil
            Alert.alert('Datos ingresados\n'+
                    `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
                    
            );
            //alert para web
            alert('Datos ingresados\n' +
                    `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
                    
            );

        }
    }

    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>TextInput & Alert</Text>
            <Text style={styles.etiquetas}>Nombre: </Text>
            <TextInput
                style={styles.input}
                placeholder='Escribe tu nombre aqui'
                value={nombre}
                onChangeText={setNombre}
            
            />

            <Text style={styles.etiquetas}>Password: </Text>
            <TextInput
                style={styles.input}
                placeholder='Escribe tu password aqui'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            
            />

            <Text style={styles.etiquetas}>Telefono: </Text>
            <TextInput
                style={styles.input}
                placeholder='Escribe tu telefono aqui'
                keyboardType='phone-pad'
                value={telefono}
                onChangeText={setTelefono}
            
            />

            <Button
                color='#2ab49dff'
                title='Mostar Alerta'
                onPress={mostrarAlerta}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#cdf3ecff',
        alignItems:'center',
        justifyContent:'center',
    },
    titulo:{
        fontFamily: 'Times New Roman',
        fontSize:32,
        color:'black',
        fontWeight:'bold',
        textDecorationLine: 'underline',
        marginBottom:20,
    },
    etiquetas:{
        fontSize: 16,
        marginBottom:5,
        marginTop:10,
    },
    input:{
        width:'50%',//ocupa el ancho disponible 
        borderWidth:2,//Grosor del borde
        borderColor:'#106f59ff',//color del borde
        borderRadius:8,//para los bordes redondeados
        padding:10,//espacio interno dentro del input
        marginBottom:10,//espacio esntre cada campo
        backgroundColor:'#fff'//color fondo
    },
})