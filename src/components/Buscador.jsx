import React, {useState} from "react";
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Button, Touchable } from "react-native";
import imageInsideInput from '../../assets/icons/LupaNormal.png';
import fondoImagen from '../../assets/images/LupaBG.png';
import returnimg from '../../assets/icons/return.png';
import CustomBottomBar from './NavegationBar';


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
            
            <TouchableOpacity onPress={goToHomeScreen}>
                <Image source={returnimg} style={styles.returnimg}/>
            </TouchableOpacity>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Busca tu lección aquí"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image source={imageInsideInput} style={styles.imageInsideInput}/>
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
    text: {
        fontSize: 20,
        marginTop: 50,
    },
    HomePic: {
        width: 50,
        height: 50,
        marginTop: 5,
        position: 'absolute',
        left: 10
    },
    StatsPic: {
        width: 50,
        height: 50,
        marginTop: 5,
        position: 'absolute',
        right: 70
    },
    ProfilePic: {
        width: 50,
        height: 50,
        marginTop: 5,
        position: 'absolute',
        right: 10
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: '#60eef8',
    },
    searchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 300,
    },
    searchInput: {
        fontWeight:'700',
        width: '80%',
        height: 42,
        backgroundColor: null,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 20,
        borderWidth: 2.5,
        borderColor:'#27d8ff'
    },
    imageInsideInput: {
        width: 22,
        height: 22,
        left: 140,
        top: -48 
    },
    returnimg: {
        position: 'absolute',
        top: 20,
        left: 20, 
        width: 70, 
        height: 70, 
    }
});

export default Buscador;
