import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements';

export default function Registro() {
  const [Rbuttom, setRbuttom] = useState(false);
  const navigation = useNavigation();

  const navigateToInicioSesion = () => {
    navigation.navigate('InicioSesion');
  };

  const [Usuario, setUsuario] = useState('');
  const [Email, setEmail] = useState('');
  const [Confpassword, setConfpassword] = useState('');
  const [Password, setPassword] = useState('');

  const handleRegistro = () => {
    if (Password !== Confpassword) {
      console.warn('Error', 'Las contraseñas no coinciden, por favor, verifica.');
      return;
    }

    console.log(`Registrando usuario: ${Usuario}, correo electrónico: ${Email}, contraseña: ${Password}`);
  };

  const handleGmail = () => {
    console.log(`Ingresando con Gmail...`);
  };

  const RbuttomPressed = () => {
    setRbuttom(!Rbuttom);
    const message = Rbuttom ? 'No recordar contraseña' : 'Recordar contraseña';
    console.log(message);
  };

  return (
    <LinearGradient colors={['#00ffff', '#ffff', '#ffff']} style={styles.container}>
      <View style={styles.overlay1}>
        <ImageBackground source={require('../../assets/images/PortadaRegistro.png')} style={styles.Image}></ImageBackground>
      </View>
      <Text style={styles.title1}>Crea tu usuario</Text>
      <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          placeholder="User"
          value={Usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={Email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={Password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry={true}
          value={Confpassword}
          onChangeText={setConfpassword}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            size={16}
            title="Recordar contraseña"
            checked={Rbuttom}
            onPress={RbuttomPressed}
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
            textStyle={styles.commonText}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleGmail}>
          <Text style={styles.buttonGmail}>Ingresar con Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleRegistro}>
          <Text style={styles.buttonLogin}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToInicioSesion}>
          <Text style={styles.buttonRegr}>Already have an account? Sign in</Text>
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
    marginBottom: 10,
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
    marginBottom: -10,
  },
  Image: {
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
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 16,
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: 'rgba(0, 43, 255, 0.8)',
    width: 200,
    height: 35,
    padding:5,
    borderRadius: 16,
    marginBottom: 5,

  },
  button: {
    padding: 10,
    borderRadius: 20,
    marginBottom:15,
    backgroundColor:'#00ffff',
  },
  buttonLogin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  },
  commonText: {
    color: '#0000FF',
    fontSize: 10,
    fontWeight: '100',
  },
  checkboxContainer: {
    
    alignItems: 'left',
    marginBottom: 8,
  },
  buttonGmail: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

  buttonRegr: {
    color: '#0000FF',
    fontSize: 10,
    textAlign: 'center',
    marginBottom:-50,
  },

  
});