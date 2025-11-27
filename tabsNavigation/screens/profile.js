import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Profile({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="green" />
                <Text style={styles.title}> Perfil de usuario </Text>
            </View>

            <Pressable style={styles.detalleButton} onPress={() => navigation.navigate('Detalle')}>
                <Text style={styles.detalleButtonTexto}>Detalles de Usuario</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    detalleButton:{
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 15,
    },
    detalleButtonTexto:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});