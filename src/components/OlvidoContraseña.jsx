import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { LinearGradient } from 'expo-linear-gradient';


export default function OlvidoContraseña() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = () => {
        if (!email.includes('@')) {
        setError('Ingresa un email válido');
            } else {
            setError('')
            navigation.navigate('NewPassword'); 
        }
    };

return (
        <LinearGradient
        colors={['#6699ff', '#00ffff']} 
        style={styles.container}
        >
        <Text style={styles.title}> Cambiar mi contraseña </Text>
        <View style={styles.overlay}>
        <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={(text) => {
                setEmail(text);
                setError('');
            }}
        />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Send an email</Text>
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
    width: 300,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    alignItems: 'center',
    marginBottom: 200,
},
title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 100,
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
resetButton: {
    backgroundColor: 'rgba(0, 43, 255, 0.8)',
    width: 200,
    height: 33,
    borderRadius: 16,
    padding: 5,
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
},
});