import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Registro() {
  
  const navigation = useNavigation();

  const navigateToInicioSesion = () => {
    navigation.navigate('InicioSesion');
  };

  const [Nombre, setNombre] = useState('');
  const [Usuario, setUsuario] = useState('');
  const [Email, setEmail] = useState('');
  const [Confpassword, setConfpassword] = useState('');
  const [Password, setPassword] = useState('');

  const handleRegistro = () => {
    if (Password !== Confpassword) {
      console.warn('Error', 'Las contraseñas no coinciden, por favor, verifica.');
      return;
    }

    console.log(`Registrando Nombre: ${Nombre}, Registrando usuario: ${Usuario}, correo electrónico: ${Email}, contraseña: ${Password}`);
    navigation.navigate('HomeScreen')
  
  };

  const handleGmail = () => {
    console.log(`Ingresando con Gmail...`);
  };

  

  return (
    <LinearGradient colors={['#60cbe3', '#ffff', '#ffff']} style={styles.container}>
      <View style={styles.overlay}>
        <ImageBackground source={require('../../assets/images/PortadaRegistro.png')} style={styles.Image}></ImageBackground>
      </View>
      <Text style={styles.title1}>Crea tu usuario</Text>
      <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={Nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={Usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={Email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={Password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirma tu contraseña"
          secureTextEntry={true}
          value={Confpassword}
          onChangeText={setConfpassword}
        />

        
        <TouchableOpacity style={styles.GmailButton} onPress={handleGmail}>

        
          <Text style={styles.buttonGmail}>Registrate con Gmail</Text>

        
         </TouchableOpacity>

       <TouchableOpacity style={styles.RegistroButton} onPress={handleRegistro}>
          <LinearGradient
          colors={['#480899', '#8730f7']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{ ...styles.buttonGradient, borderRadius: 10 }}
          >
              < Text style={styles.buttonRegistro}>Registrarse</Text>
          </LinearGradient>
          </TouchableOpacity>

      <Text style={styles.text2}>¿Ya tienes una cuenta?</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToInicioSesion}>

        <Text style={styles.buttonRegr}>ingresa aqui</Text>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(173, 216, 230, 0.6)',
  },
  overlay: {
    marginBottom: 20,
    width: 300,
    padding: 25,
   
    alignItems: 'center',
    
    
  },

  Image: {
    marginTop:40,
    width: '100%',
    height:160,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)',
    
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(10, 10, 10, 0.8)',
    marginBottom: -10,
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 13,
    borderWidth: 2.5,
    borderColor:'#1ea8c6',
    fontSize:12,
    fontWeight:'800'
  },
  RegistroButton: {
    marginTop:40,
    width: 200,
    height: 45,
    marginBottom: 30,
    borderRadius: 30,
    shadowColor: '#000', 
    shadowOpacity: 1, 
    elevation: 10, 

  },
  GmailButton: {
    
    padding:2,
    borderRadius: 12,
    marginTop:50,
    backgroundColor:'#60EEF8',
    width: 130,
    height: 28,
    borderWidth:3,
    borderColor:'#68bcd5',
    shadowColor: '#68bcd5', 

  },
  buttonRegistro: {
    color: '#FFFF',
    fontSize:15,
    lineHeight:40,
    fontWeight:'900',
    textAlign: 'center',
    
    
  },
  commonText: {
    color: '#0000FF',
    fontSize: 10,
    fontWeight: '100',
  },
  
  buttonGmail: {
    color: '#000',
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'center',
    
  },

  buttonRegr: {
    
    
    
    marginBottom:0,

    color: '#6c32ec',
    fontSize: 10,
    fontWeight:'800',
    textDecorationLine:'underline',
    marginLeft:110,
   
  },

  text2:{

    color: '#000',
    fontSize: 10,
    marginTop:10,
    marginLeft:-55,
    marginBottom:-14,
  },

  
});