import React from "react";
import Constants from 'expo-constants';
import { Text, View } from "react-native";
import RepositoryList from './RepositoryList'
import HomeScreen from "./HomeScreen";

const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <HomeScreen />
        </View>
    )
}

export default Main