import React from "react";
import { ScrollView, Text, Image, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
const RutasRecomendadas = () => {
    return (
        <View style={styles.grandcontainer}>
            <View style={styles.subcontainer}>
                <Image
                    source={require('../../assets/images/PICRutas1.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
                <Text style={styles.Sub}>
                    Pasos para escuchar con atención
                </Text>
                <Text style={styles.Valoracion}>
                    5.0 Rates
                </Text>
            </View>
            <View style={styles.subcontainer}>
                <Image
                    source={require('../../assets/images/PICRutas2.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
                <Text style={styles.Sub}>
                    Cómo dar feedback negativo
                </Text>
                <Text style={styles.Valoracion}>
                    4.0 Rates
                </Text>
            </View>
            <View style={styles.subcontainer}>
                <Image
                    source={require('../../assets/images/PICRutas3.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
                <Text style={styles.Sub}>
                    Habilidades 1
                </Text>
                <Text style={styles.Valoracion}>
                    5.0 Rates
                </Text>
            </View>
            <View style={styles.subcontainer}>
                <Image
                    source={require('../../assets/images/PICRutas4.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
                <Text style={styles.Sub}>
                    Habilidades 2
                </Text>
                <Text style={styles.Valoracion}>
                    5.0 Rates
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    grandcontainer: {
        marginTop: '0%',
        //alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    subcontainer: {
        width: '40%',
        marginBottom: '8%',
        marginHorizontal: '3%'
    },
    Sub: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    Valoracion: {
        fontSize: 8
    },
    img: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1,
    }
});

export default RutasRecomendadas;

