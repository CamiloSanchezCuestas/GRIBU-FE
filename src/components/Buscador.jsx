import React, {useState} from "react";
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Button, Touchable } from "react-native";
import imageInsideInput from '../../assets/icons/LupaNormal.png';
import fondoImagen from '../../assets/images/LupaBG.png';
import CustomBottomBar from './NavegationBar';
import BackButton from "./BackButton";

const Buscador = ({navigation}) => {
    const [searchText, setSearchText] = useState("");

    const goToProfile = () => {
        navigation.navigate('Profile')
    };
    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen')
    }
    
    const handleSearch = () => {
        // Aquí puedes implementar la lógica para realizar la búsqueda
        console.log("Búsqueda realizada:", searchText);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={fondoImagen} style={styles.backgroundImage} />
            
            <View style={styles.BBContainer}>
                <BackButton
                    goBack={goToHomeScreen}
                />
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Busca tu lección aquí"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image source={imageInsideInput} style={styles.imageInsideInput} resizeMode="contain"/>
                </TouchableOpacity>
            </View>
            <CustomBottomBar
                goToProfile={goToProfile}
                goToHome={goToHomeScreen} 
                goToStats={goToProfile} 
            />
            
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '105%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    searchContainer: {
        width: '80%',
        height: '5%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '70%',
        //backgroundColor: 'gray',
        //flexDirection: 'row'
    },
    searchInput: {
        fontWeight:'700',
        width: '100%',
        height: '100%',
        backgroundColor: null,
        marginBottom: '0%',
        paddingLeft: '3%',
        borderRadius: 20,
        borderWidth: 2.5,
        borderColor:'#27d8ff'
    },
    imageInsideInput: {
        width: '15%',
        height: '80%',
        left: '85%',
        bottom: '100%',
        //backgroundColor: 'blue', 
    },
      BBContainer: {
        width: '16%',
        height: '8%',
        left: '2%',
        // backgroundColor: 'gray', //esto es para revisar como se comporta el contenedor
      },
      
});

export default Buscador;
