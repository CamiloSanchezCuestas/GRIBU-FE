import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { LinearGradient } from 'expo-linear-gradient';


export default function OlvidoContraseña() {
    const navigation = useNavigation();

    const [Email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSendPassword = () => {
        if (!Email.includes('@')) {
        setError('Ingresa un email válido');
            } else {
            setError('')
            navigation.navigate('NewPassword'); 
        }
    };

return (
        <LinearGradient
        colors={['#60cbe3', '#ffff', '#ffff']} 
        style={styles.container}
        >

        <View style={styles.overlay}>
            <ImageBackground source={require('../../assets/images/PortadaRegistro.png')} style={styles.Image}></ImageBackground>
        </View>
       
        <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={Email}
          onChangeText={setEmail}
        />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <TouchableOpacity style={styles.SendButton} onPress={handleSendPassword}>
                <LinearGradient
                    colors={['#480899', '#8730f7']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={{ ...styles.buttonGradient, borderRadius: 10 }}
          >   
                <Text style={styles.buttonText}>Enviar</Text>
                </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.text}> Usa el mismo correo que usaste en tu </Text>
                <Text style={styles.text}> registro para cambiar tu contraseña </Text>
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
    width: 300,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    alignItems: 'center',
    marginBottom: 200,
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
SendButton: {
    marginTop:40,
    width: 200,
    height: 45,
    marginBottom: 30,
    borderRadius: 30,
    shadowColor: '#000', 
    shadowOpacity: 1, 
    elevation: 10, 
},
buttonText: {
    color: '#FFFF',
    fontSize:15,
    lineHeight:40,
    fontWeight:'900',
    textAlign: 'center',
},
errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
},

overlay: {

    marginBottom: 20,
    width: 300,
    padding: 25,
   
    alignItems: 'center',
    
    
  },

  Image: {
    marginTop:-50,
    width: '100%',
    height:160,
    resizeMode: 'contain',
    marginBottom:40,

  },

  text: {

    marginTop:20,

  },
});