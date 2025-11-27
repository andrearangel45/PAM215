import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,
 StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function UsuarioView() {
 const [usuarios, setUsuarios] = useState([]);
 const [nombre, setNombre] = useState('');
 const [loading, setLoading] = useState(true);
 const [guardando, setGuardando] = useState(false);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
     Alert.alert('Error', error.message);
    } finally {
    setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();

    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const handleAgregar = async () => {
    if (guardando) return;
      try {
        setGuardando(true);
        const usuarioCreado = await controller.crearUsuario(nombre);
        Alert.alert(' Usuario Creado', `" ${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`
      );
      setNombre('');
      } 
      catch (error) {
        Alert.alert('Error', error.message);
      } 
    finally {
      setGuardando(false);
    }
  };

  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userData}>
            {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>
    </View>
  );
 


////////////////////////////////
if(loading){
  return(
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#7eabdfff"
          animating={true}
          hidesWhenStopped={true}
          style={{ marginBottom: 10 }}
        />
        <Text style={styles.cargando}>Cargando..</Text>
      </View>
    </View>
  )
}

 return (
  <View style={styles.container}>
   <Text style={styles.header}>INSERT & SELECT</Text>

   <View style={styles.inputContainer}>
    <Text style={styles.sectionTitle}>Insertar Usuario</Text>
    <Text>Escribe el nombre del usuario</Text>
    <TextInput
     style={styles.input}
     placeholder="Nombre del usuario"
     value={nombre}
     onChangeText={setNombre}
    />
    <TouchableOpacity 
     style={styles.button} 
     onPress={handleAgregar}
     disabled={loading}
    >
      <Text style={styles.buttonText}>Agregar Usuario</Text>
    </TouchableOpacity>
   </View>

   <View style={styles.listHeader}>
    <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

    <TouchableOpacity onPress={cargarUsuarios}>
     <Text style={styles.reloadText}>Recargar</Text>
    </TouchableOpacity>
   </View>
   
   <FlatList
    data={usuarios}
    renderItem={renderUsuario}
    keyExtractor={item => item.id.toString()}
    style={styles.list}
    ListEmptyComponent={<Text style={styles.emptyText}>No hay usuarios registrados.</Text>}
   
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#fff',
 },
 header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
 },
 sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
 },
 inputContainer: {
  marginBottom: 30,
  padding: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
 },
 input: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  borderRadius: 5,
  marginBottom: 15,
 },
 button: {
  backgroundColor: '#007AFF',
  padding: 15,
  borderRadius: 5,
  alignItems: 'center',
 },
 buttonText: {
  color: '#fff',
  fontWeight: 'bold',
 },
 listHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
 },
 reloadText: {
  color: '#007AFF',
  fontWeight: '600',
 },
 list: {
  flex: 1,
 },
 userItem: {
  flexDirection: 'row',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
  alignItems: 'center',
 },
 userNumber: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: '#007AFF',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
 },
 userNumberText: {
  color: '#fff',
  fontWeight: 'bold',
 },
 userInfo: {
  flex: 1,
 },
 userName: {
  fontSize: 16,
  fontWeight: '600',
 },
 userId: {
  fontSize: 12,
  color: '#666',
 },
 userData: {
  fontSize: 12,
  color: '#999',
 },
 emptyText: {
  textAlign: 'center',
  marginTop: 20,
  color: '#666',
 }
});