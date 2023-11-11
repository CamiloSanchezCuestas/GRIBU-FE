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
        width: '90%',
        height: '91.5%'
    }
});

export default BackButton;