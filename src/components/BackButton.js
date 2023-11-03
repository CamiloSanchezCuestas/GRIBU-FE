import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const BackButton = ({goBack}) => {
    return (
        <TouchableOpacity onPress={goBack}>
            <Image source={require('../../assets/icons/return.png')} style={styles.imageButton} resizeMode="Contain" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imageButton: {
        width: '100%',
        height: '100%'
    }
});

export default BackButton;