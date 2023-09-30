import React from "react";
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const Modulo3Screen = ({ navigation}) => {
    const goToProfile = () => {
        navigation.navigate('Profile')
    };
    const goToLogin = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.usertext}>
                    Nicomontes9
            </Text>
            <TouchableOpacity onPress={goToProfile}>
                <Image
                    source={require('../../assets/icons/Profile.png')}
                    style={styles.ProfilePicHeader}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <ScrollView style={styles.MainContainer}>
            <Image
                    source={require('../../assets/images/ComuRuta.png')}
                    style={styles.Headerimg}
                    resizeMode="contain"
                />
            </ScrollView>
            <View style={styles.bottomBar}>
                <TouchableOpacity onPress={goToLogin}>
                        <Image
                            source={require('../../assets/icons/Home.png')}
                            style={styles.HomePic}
                            resizeMode="contain"
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToProfile}>
                        <Image
                            source={require('../../assets/icons/Stats.png')}
                            style={styles.StatsPic}
                            resizeMode="contain"
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToProfile}>
                    <Image
                        source={require('../../assets/icons/Profile.png')}
                        style={styles.ProfilePic}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    usertext: {
        fontSize: 20,
        marginTop: 30,
        marginLeft: 40,
        color: '#0032b3',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    MainContainer: {
        flex: 1,
    },
    ProfilePic: {
        width: 50,
        height: 50,
        marginTop: 5,
        position: 'absolute',
        right: 10
    },
    ProfilePicHeader: {
        width: 70,
        height: 70,
        marginTop: 5,
        position: 'absolute',
        right: 10,
        top: -60
    },
    Headerimg: {
        width: 320,
        height: 110,
        marginTop: 40,
        marginLeft: 45,
    },
    HomePic: {
        width: 50,
        height: 50,
        marginTop: 5,
        position: 'absolute',
        left: 10
    },
    StatsPic: {
        width: 50,
        height: 50,
        marginTop: 5,
        position: 'absolute',
        right: 70
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: '#60eef8',
    },
});

export default Modulo3Screen