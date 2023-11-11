import React from "react";
import Constants from 'expo-constants';
import {View } from "react-native";


import HomeScreen from "./HomeScreen";
const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <HomeScreen />
        </View>
    )
}

export default Main