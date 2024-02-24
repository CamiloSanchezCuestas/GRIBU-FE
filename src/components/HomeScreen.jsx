import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View, TouchableOpacity, SafeAreaView, platform } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import CustomBottomBar from './NavegationBar';
import DayCount from './DayCount';
import ClaseRecomendada from './ClaseRecomendada';
import MainOtrasClases from './MainOtrasClases';


const HomeScreen = ({ navigation }) => {
    const goToVimeoPlayer = () => {
        navigation.navigate('VimeoPlayer');
        console.log('Yendo a player');
    };
    const goToMOD1 = () => {
        navigation.navigate('Modulo 1');
        console.log('Yendo a módulo 1');
    };
    const goToMOD2 = () => {
        navigation.navigate('Modulo 2');
        console.log('Yendo a módulo 2')
    };
    const goToMOD3 = () => {
        navigation.navigate('Modulo 3');
        console.log('Yendo a modulo 3')
    };
    const goToLook = () => {
        navigation.navigate('Buscador');
        console.log('Yendo a buscador')
    };
    const goToProfile = () => {
        navigation.navigate('Profile');
        console.log('Yendo a perfil')
    };
    const goToLogin = () => {
        navigation.navigate('InicioSesion');
        console.log('Yendo a Login')
    };
    const goToStats = () => {
        navigation.navigate('Stats');
        console.log('Yendo a stats')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.DayCountContainer}><DayCount/></View>
            <ScrollView>
                <View style={styles.Recommendedclass}>
                <ClaseRecomendada
                    goToVimeoPlayer={goToVimeoPlayer}
                />
                </View>
                <View style={styles.texts}>
                    <Text style={styles.title}>
                        Hola, Nicolás
                    </Text>
                    <Text style={styles.sub2}>
                        ¿Qué área de tu vida quieres trabajar hoy?
                    </Text>
                </View>
            
                <MainOtrasClases
                        goToMOD1={goToMOD1}
                        goToMOD2={goToMOD2}
                    />
               
            
            </ScrollView>
            <TouchableOpacity onPress={goToLook} style={styles.lupacontainer}>
            <Image
                source={require('../../assets/icons/Lupa.png')}
                style={styles.Lupa}
                resizeMode="contain"
            />
            </TouchableOpacity>

            
            <CustomBottomBar
                goToProfile={goToProfile}
                goToHome={goToLogin} 
                goToStats={goToStats} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       //marginTop: platform.os === 'android' ? StatusBar.currentHeight : 0,
       
        marginBottom:0
    },
    Recommendedclass: {
        display: 'flex',
        flex: 1,
        marginBottom: '50%',
        marginTop: '40%',
    },
    Lupa: {
        width: '12%',
        opacity: 0.6,
    },
    lupacontainer: {
        position: 'relative',
        bottom: '15%',
        left: '85%',
    },
    texts: {
        marginLeft: '10%',
    },
    title: {
        color: '#0032b3',
        fontWeight: 'bold',
        fontSize: 30,
    },
    sub2: {
        marginTop:20,
        color: '#0032b3',
        fontSize: 14,
    },
    DayCountContainer: {
        position: 'absolute',
        top: '10%',
        flex: 1,
        margin: 'auto',
        alignSelf: 'center',
        zIndex: 1,
    },

});

export default HomeScreen;