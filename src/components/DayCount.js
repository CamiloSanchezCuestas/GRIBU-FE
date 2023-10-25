import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const DíasSemana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

const DayCount = () => {
  const [díaActual, setDíaActual] = useState(new Date().getDay());
  const [botonesEstado, setBotonesEstado] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('botonesEstado', (err, result) => {
      if (result) {
        setBotonesEstado(JSON.parse(result));
      }
    });

    const interval = setInterval(() => {
      const adjustedDay = new Date().getDay();
      setDíaActual(adjustedDay);
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    reiniciarEstadoSemanal();
  }, [díaActual]);

  const reiniciarEstadoSemanal = () => {
    const nuevoEstado = {};
    DíasSemana.forEach((día, index) => {
      nuevoEstado[index] = index === díaActual ? 'active' : 'inactive';
    });
    setBotonesEstado(nuevoEstado);
  };

  const cambiarEstadoBoton = (index) => {
    if (index === díaActual) {
      const nuevoEstado = { ...botonesEstado };
      if (nuevoEstado[index] === 'inactive') {
        nuevoEstado[index] = 'active';
      } else if (nuevoEstado[index] === 'active' && index !== díaActual) {
        nuevoEstado[index] = 'inactive';
      }
      setBotonesEstado(nuevoEstado);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {DíasSemana.map((día, index) => (
          <TouchableOpacity
            key={día}
            style={[
              styles.button,
              botonesEstado[index] === 'active' ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={() => {
              if (index === díaActual) {
                cambiarEstadoBoton(index);
                console.log('El botón funciona')
                navigation.navigate('Profile');
              }
            }}
            disabled={index !== díaActual}
          >
            <Text style={styles.buttonText}>{día}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: -650
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50, // Para hacerlo circular
    borderWidth: 0,
    borderColor: 'null',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2
  },
  buttonActive: {
    backgroundColor: 'green',
  },
  buttonInactive: {
    backgroundColor: 'gray',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
});

export default DayCount;
