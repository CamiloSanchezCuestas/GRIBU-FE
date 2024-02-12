import React from "react";
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import CustomBottomBar from './NavegationBar';
import ProfilePicHeader from "./ProfilePicHeader";
import RutasRecomendadas from "./RutasRecomendadas";

const Modulo1Screen = ({ navigation }) => {
    const goToProfile = () => {
        navigation.navigate('Profile');
        console.log('Yendo a perfil');
    };
    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
        console.log('Yendo a home');
    };
    const goToLook = () => {
        navigation.navigate('Buscador');
        console.log('Yendo a Buscador');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.usertext}>
                Nicomontes9
            </Text>
            <View style={styles.ProfilePicHeader}>
                <ProfilePicHeader 
                    goToProfile={goToProfile}
                />
            </View>
                <Image
                    source={require('../../assets/images/ComuRuta.png')}
                    style={styles.Headerimg}
                    resizeMode="contain"
                />
                <View style={styles.RCContainer}>
                <RutasRecomendadas/>
                </View>
                <TouchableOpacity onPress={goToLook} style={styles.lupacontainer}>
                    <Image
                        source={require('../../assets/icons/Lupa.png')}
                    style={styles.Lupa}
                    resizeMode="contain"
                    />
                </TouchableOpacity>
            <CustomBottomBar
                goToProfile={goToProfile}
                goToHome={goToHomeScreen}
                goToStats={goToProfile}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    usertext: {
        fontSize: 20,  // Usar un porcentaje del tamaño de la pantalla
        marginTop: '7%',   // Usar un porcentaje del tamaño de la pantalla
        marginLeft: '5%', // Usar un porcentaje del tamaño de la pantalla
        color: '#0032b3',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    Headerimg: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '-20%'
    },
    ProfilePicHeader: {
        width: '15%',
        position: 'absolute',
        right: 10,
    },
    RCContainer: {
        marginBottom: '10%',
        marginTop: '-20%'
    },
    Lupa: {
        width: '12%',
        //height: ,
        opacity: 0.6
    },
    lupacontainer: {
        position: 'relative',
        bottom: '30%',
        left: '85%',
    },
});

export default Modulo1Screen;