import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import CustomBottomBar from './NavegationBar';

const HomeScreen = ({ navigation }) => {
    const goToVimeoPlayer = () => {
        navigation.navigate('VimeoPlayer');
    };
    const goToMOD1 = () => {
        navigation.navigate('Modulo 1')
    };
    const goToMOD2 = () => {
        navigation.navigate('Modulo 2')
    };
    const goToMOD3 = () => {
        navigation.navigate('Modulo 3')
    };
    const goToLook = () => {
        navigation.navigate('Buscador')
    };
    const goToProfile = () => {
        navigation.navigate('Profile')
    };
    const goToLogin = () => {
        navigation.navigate('InicioSesion')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.MainClassContainer}>
                <Text style={styles.sub}>
                    Lecciones recomendadas para hoy
                </Text>
                <View>
                    <TouchableOpacity onPress={goToVimeoPlayer}>
                        <Image
                            source={require('../../assets/images/FEEDBACKN.png')}
                            style={styles.Recommendedclass}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    Hola, Nicolás
                </Text>
                <Text style={styles.sub2}>
                    ¿Qué área de tu vida quieres trabajar hoy?
                </Text>
                <View style={styles.ClassBlock}>
                    <View style={styles.ClassInfo}>
                        <Text style={styles.sub3}>
                            Habilidades profesionales
                        </Text>
                        <TouchableOpacity onPress={goToMOD1} style={styles.ClassInfoimg}>
                            <Image
                                source={require('../../assets/images/HABILIDADES_PRO.png')}
                                style={styles.ClassInfoimg}
                                resizeMode="contain" 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ClassInfo}>
                        <Text style={styles.sub3}>
                            Gestión emocional
                        </Text>
                        <TouchableOpacity onPress={goToMOD2} style={styles.ClassInfoimg}>
                            <Image
                                source={require('../../assets/images/GE.png')}
                                style={styles.ClassInfoimg}
                                resizeMode="contain" 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ClassInfo}>
                        <Text style={styles.sub3}>
                            Comunicación
                        </Text>
                        <TouchableOpacity onPress={goToMOD3} style={styles.ClassInfoimg}>
                            <Image
                                source={require('../../assets/images/Comm.png')}
                                style={styles.ClassInfoimg}
                                resizeMode="contain" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <CustomBottomBar
                goToProfile={goToProfile}
                goToHome={goToLogin} // Cambiado el nombre de la función para que coincida con tu Home button
                goToStats={goToProfile} // Cambiado el nombre de la función para que coincida con tu Stats button
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    MainClassContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ClassBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ClassInfo: {
        flexDirection: 'column',
        marginHorizontal: 2,  
    },
    ClassInfoimg: {
        width: 120,
        height: 180,
    },
    Recommendedclass: {
        width: 360,
        height: 640,
        marginTop: -220
    },
    Lupa: {
        width: 50,
        height: 50,
        opacity: 0.6
    },
    lupacontainer: {
        position: 'absolute',
        bottom: 150,
        right: 10,
    },
    
    sub: {
        color: '#0032b3',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: -80,
    },
    title: {
        color: '#0032b3',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: -200,
        marginLeft: -150
    },
    sub2: {
        color: '#0032b3',
        fontSize: 14,
        marginLeft: -60,
        marginBottom: 10
    },
    sub3: {
        color: '#1e67e2',
        fontSize: 9,
        textAlign: 'center'
    },
    
});

export default HomeScreen;
