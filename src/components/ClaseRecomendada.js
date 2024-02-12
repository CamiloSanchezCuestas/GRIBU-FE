import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const ClaseRecomendada = ({goToVimeoPlayer}) => {


    return (
        <View style={styles.supercontainer}>
            <Text style={styles.sub}>
                Lecciones recomendadas para hoy
            </Text>
            <TouchableOpacity onPress={() => {
                goToVimeoPlayer();
                console.log('Yendo a reproductor');
                }}>
                <Image
                    source={require('../../assets/images/FEEDBACKN.png')}
                    style={styles.Recommendedclass}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    supercontainer: {
        display: "flex",
        flex: 1
    },
    sub: {
        color: '#0032b3',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: '10%'
    },
    Recommendedclass: {
        width: 'auto',
        height: '350%',
        marginTop: -4
    }
});

export default ClaseRecomendada;