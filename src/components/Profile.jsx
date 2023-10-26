import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    return (
        <SafeAreaView>
            <Text>
                Esta es la página de su perfil
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 50
    }
});

export default Profile