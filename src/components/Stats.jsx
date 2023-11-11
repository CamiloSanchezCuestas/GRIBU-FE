import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import CustomBottomBar from './NavegationBar';
import ProgressBar from 'react-native-progress/Bar';

const Stats = () => {
   
    const goToProfile = () => {
        navigation.navigate("Profile");
    };
    const goToLogin = () => {
        navigation.navigate("InicioSesion");
    };

    const navigation = useNavigation();

    
    const progress = 0.8;

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.buttonImage} onPress={() => navigation.navigate("HomeScreen")}>
                <Image source={require("../../assets/icons/return.png")} style={styles.imageButton} />
            </TouchableOpacity>
            
            <Image source={require("../../assets/icons/ProfileBig.png")} style={styles.avatarImage} />

            
            <ProgressBar style={styles.ProgressBarCon} progress={progress} 

                color='#60EEF8'
                width={250}
                height={17} 
                
                />

            <CustomBottomBar goToProfile={goToProfile} goToHome={goToLogin} goToStats={goToProfile} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },

    buttonImage: {
        position: "absolute",
        top: 50,
        left: 10,
        zIndex: 1,
    },
    imageButton: {
        width: 60,
        height: 60,
    },

    avatarImage: {
        width: '90%',
        height: 145,
        marginTop: 110,
        marginBottom: 10,
    },
    Text: {
        fontSize: 22,
        color: "#000",
        fontWeight: '900',
        marginBottom: -90,
        marginTop: 100,
    },
    ProgressBarCon: {
        marginLeft: -80,
        marginTop:20,
        marginBottom: 10,
        borderColor: '#000',
        borderRadius: 11
        
    },
});

export default Stats;
