import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const MainOtrasClases = ({goToMOD1, goToMOD2}) => {

    return (
        <View style={styles.supercontainer}>
            <TouchableOpacity onPress={goToMOD1}>
                <Image
                    source={require('../../assets/images/ComuRuta.png')}
                    style={styles.Image1}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToMOD2}>
                <Image
                    source={require('../../assets/images/ComuRuta.png')}
                    style={styles.Image2}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    supercontainer: {
        display: "flex",
        flex: 1,
        marginTop: '-30%',
    },
    Image1: {
        width: '90%',
        marginLeft: '5%',
    },
    Image2: {
        width: '90%',
        marginLeft: '5%',
        //marginTop: '-70%',
    }
});

export default MainOtrasClases;