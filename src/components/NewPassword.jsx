import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const [MessageColor, setMessageColor] = useState("");
  const navigation = useNavigation(); 

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
        setMessage('');
      setButtonDisabled(true);

      setTimeout(() => {
        setShowInputBox(true); 

        
        setTimeout(() => {
          setShowInputBox(false);
          navigation.navigate('InicioSesion'); 
        }, 3000);
      }, 3000);
    } else {
      setMessage('Las contraseñas no coinciden');
      setMessageColor('red');
    }
  };

  return (
    <LinearGradient colors={['#60cbe3', '#ffff', '#ffff']} style={styles.container}>
      <View style={styles.overlay}>
        <ImageBackground source={require('../../assets/images/PortadaRegistro.png')} style={styles.Image} />
      </View>

      <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.SendButton} onPress={handlePasswordChange}>
          <LinearGradient
            colors={['#480899', '#8730f7']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={{ ...styles.buttonGradient, borderRadius: 10 }}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </LinearGradient>
        </TouchableOpacity>

        {showInputBox && (
          <Modal transparent={true} animationType="slide">
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>TU CONTRASEÑA HA SIDO ACTUALIZADA!</Text>
              </View>
            </View>
          </Modal>
        )}

        <Text style={{ ...styles.errorText, color: 'red' }}>{message}</Text>
      </View>
    </LinearGradient>
  );
}



const styles = StyleSheet.create({
  

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    borderWidth:3,
    borderColor:"#1878ec"
  },
  modalText: {
    fontSize: 25,
    marginBottom: 30,
    textAlign: "center",
    fontWeight:'900',
    color:"#004aad"
  },
  
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
        marginBottom: 20,
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