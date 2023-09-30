import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function NewPassword({ navigation }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handlePasswordChange = () => {
        if (newPassword === confirmPassword) {
            setMessage('');
            console.log('Contraseña cambiada con éxito: ' + newPassword);
            setMessage('La contraseña se cambio exitosamente');
            setButtonDisabled(true);

        setTimeout(() => {
            navigation.navigate('InicioSesion');
        }, 3000);
        } else {
            setMessage('Las contraseñas no coinciden');
        }
    };

return (
    <LinearGradient
        colors={['#6699ff', '#00ffff']}
        style={styles.container}
    >
        <Text style={styles.title}>Cambia tu contraseña</Text>
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu nueva contraseña"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
            />
        <TextInput
            style={styles.input}
            placeholder="Confirma tu contraseña"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
        />
            <TouchableOpacity
                style={[styles.changeButton, { backgroundColor: isButtonDisabled ? 'gray' : 'rgba(0, 43, 255, 0.8)' }]}
                onPress={handlePasswordChange}
                disabled={isButtonDisabled}
            >
                <Text style={styles.buttonText}>Cambiar contraseña</Text>
                </TouchableOpacity>
                <Text style={[styles.message, { color: 'white' }]}>{message}</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 30,
    },
    form: {
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        height: 35,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'gray',
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 16,
    },
    changeButton: {
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
    message: {
        fontSize: 16,
        marginTop: 10,
    },
});
