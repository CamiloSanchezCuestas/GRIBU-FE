import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { CheckBox } from 'react-native-elements';

export default function InicioSesion() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false); 


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

  const toggleRememberPassword = () => {
    setRememberPassword(!rememberPassword);

    // Mostrar mensaje en la consola
    const message = rememberPassword ? 'No recordar contraseña' : 'Recordar contraseña';
    console.log(message);
  };
        
  return (
    <LinearGradient
      colors={['#6699ff', '#00ffff']} 
      style={styles.container}
    >
      <Text style={styles.title}> Bienvenido de nuevo </Text>
      <View style={styles.overlay1}>
        <ImageBackground
          source={require('../../assets/images/Portada.png')}
          style={styles.Image}
        ></ImageBackground>
      </View>
      <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            size={16} 
            title="Remember Password"
            checked={rememberPassword}
            onPress={toggleRememberPassword}
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
            textStyle={styles.commonText}
          />
          <TouchableOpacity onPress={goTOOlvidoContraseña}>
            <Text style={styles.forgotPasswordButton}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToRegistro}>
          <Text style={styles.buttonRegr}>Don't have an account? Sing Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Gmailbuttom} onPress={handleGmail}>
          <Text style={styles.buttonGmail}>Ingresar con Gmail</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 0,
  },
  input: {

    
    width: '90%',
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'gray',
    
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 16,
  },
  loginButton: {
    backgroundColor: 'rgba(0, 43, 255, 0.8)',
    width: 200,
    height: 33,
    borderRadius: 16,
    padding:5
  },

  button: {
   
    padding: 10,
    borderRadius: 20,
  },
  buttonLogin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonRegr: {
    color: '#0000FF',
    fontSize: 10,
    
    textAlign: 'center',
    marginBottom:10,
  },

  commonText: {
    color: '#0000FF',
    fontSize: 10,
    fontWeight: '100',
    
  },

  checkboxContainer: {
    flexDirection: 'row', 
    
    alignItems: 'center',
    marginBottom: 8,
  },
  
  forgotPasswordButton: {
    marginBottom: 0,
    color: '#0000FF',
    fontSize: 10,
    textAlign: 'right',
  },

  buttonGmail: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    

  },

  Gmailbuttom:{
    
  backgroundColor:'rgba(255,255,255,0.7)',
  borderRadius:15,
  width:160,
  height: 30,
  padding:4,
  marginBottom:-50
  
  }
});

  

