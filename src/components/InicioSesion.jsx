import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { LinearGradient } from 'expo-linear-gradient'; 


export default function InicioSesion() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 


  const navigateToRegistro = () => {
    navigation.navigate('Registro');
  };

  const handleLogin = () => {
    console.log(`Iniciando sesión con correo electrónico: ${email} y contraseña: ${password}`);
    navigation.navigate('HomeScreen')
  };

  const handleGmail = () => {
    console.log(`Iniciando gmail...`);
  };

  const goTOOlvidoContraseña = () => {
    navigation.navigate('OlvidoContraseña')
  };

        
  return (
    <LinearGradient
      colors={['#7731D0','#7731D0', '#d0c8ef']} 
      style={styles.container}
    >
      <Text style={styles.title}> Bienvenido de nuevo </Text>
      <View style={styles.overlay1}>
        <ImageBackground
          source={require('../../assets/images/Portada.png')}
          style={styles.Image} >
        </ImageBackground>

        <View style={styles.imageTextContainer}>
          <Text style={styles.imageText}>

            Tu mundo de desarrollo personal
          </Text>
        </View>
      </View>
      <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        
       
          <TouchableOpacity onPress={goTOOlvidoContraseña}>
            <Text style={styles.forgotPasswordButton}>Te olvidaste de tu contraseña?</Text>
          </TouchableOpacity>
        

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <LinearGradient
          colors={['#2aeefb','#c3f8ff']} 
          start={{ x: 1, y: 0 }} 
          end={{ x: 0, y: 0 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonLogin}>INICIA SESIÓN</Text>
        </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.text2}>¿No tienes cuenta?</Text>
        <TouchableOpacity style={styles.button} onPress={navigateToRegistro}>
       
          <Text style={styles.buttonRegr}>Crea una aqui</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Gmailbuttom} onPress={handleGmail}>
          <Text style={styles.buttonGmail}>Ingresar con Gmail</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({

  buttonGradient: {
    flex: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(173, 216, 230, 0.6)',
  },
  overlay: {
    marginBottom: 100,
    width: 300,
   
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    
    alignItems: 'center',
  },
  overlay1: {
    width: 300,
    padding: 27,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    
    alignItems: 'center',
    marginBottom: -30,
  },
  Image: {
    
    width: '97%',
    height: 190,
    resizeMode: 'contain',
   
  },
  title: {
    
    fontSize: 32,
    fontStyle: 'italic',
    marginTop:50,
    color: '#ffff',
    marginBottom: 0,
  },
  input: {

    
    fontWeight:'700',
    width: '90%',
    height: 42,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth:2.5,
    borderColor:'#2467cc'
  },
  loginButton: {
    backgroundColor: '#ffff',
    width: 190,
    height: 45,
    borderRadius: 10,
    shadowColor: '#000', 
    shadowOpacity: 1, 
    elevation: 10, 
    
  },

  button: {
   
    padding: 10,
    
  },
  buttonLogin: {
    color: '#1f308a',
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


  
  forgotPasswordButton: {

    marginRight:-100,
    
    color: '#FFFF',
    fontSize: 10,
    textAlign: 'right',
    marginBottom:20,
    textDecorationLine: 'underline'
    
  },

  buttonGmail: {
    color: '#000',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
    

  },

  Gmailbuttom: {
    backgroundColor: '#60EEF8',
    borderRadius: 15,
    width: 185,
    height: 25,
    padding: 4,
    marginBottom: -50,
    borderWidth:2,
    borderColor:'#68bcd5',
    shadowColor: '#68bcd5', 
    
  },
  
  
  
  
  

  imageText: {
    color: '#ffff',
    fontStyle:'italic',
    fontWeight:'200',
    fontSize: 16,
    marginTop:30,
    marginBottom: 30,
    marginRight:-100
  },

  text2:{

    color: '#FFFF',
    fontSize: 10,
   marginTop:10,
    marginLeft:-60,
    marginBottom:-24,
  },

  buttonRegr: {
    color: '#6c32ec',
    fontSize: 10,
    fontWeight:'800',
    textDecorationLine:'underline',
    marginLeft:95,
    marginBottom:10,
  },


});

  

