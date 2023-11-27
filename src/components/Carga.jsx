import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Carga() {
  const navigation = useNavigation();

  useEffect(() => {
    // Configuración del temporizador para esperar 4 segundos
    const timer = setTimeout(() => {
      // Navegar a la pantalla "InicioSesion" después de 4 segundos
      navigation.navigate('InicioSesion');
    }, 4000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={['#52a0b4', '#3c6493', '#313978']} style={styles.container}>
      <View style={styles.centeredContainer}>
        <ImageBackground source={require('../../assets/icons/Gribu.png')} style={styles.Portada} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    marginTop: '90%',
    alignItems: 'center',
  },
  Portada: {
    width: '91%', 
    height: '50%', 
  },
});
