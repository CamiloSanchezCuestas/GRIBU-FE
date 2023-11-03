import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import { ScrollView, Image, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';

const ProfilePicHeader = ({goToProfile}) => {
    return(
        <View>
            <TouchableOpacity onPress={goToProfile}>
            <Image
                source={require('../../assets/icons/Profile.png')}
                style={{width: '100%', bottom: '38%'}}
                resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
});

export default ProfilePicHeader;