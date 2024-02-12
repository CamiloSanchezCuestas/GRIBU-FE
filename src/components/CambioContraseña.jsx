import React from "react";
import {Text,View,Image,StyleSheet,TouchableOpacity,TextInput,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import CustomBottomBar from "./NavegationBar";

const CambioContraseña = () => {
  
    const goToProfile = () => {
      navigation.navigate("Profile");
      console.log('Dirigiendose a perfil');
    };
    const goToLogin = () => {
      navigation.navigate("InicioSesion");
      console.log('Dirigiendose a Login')
    };
  
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.buttonImage} onPress={() => navigation.navigate("HomeScreen")}>
          <Image source={require("../../assets/icons/return.png")} style={styles.imageButton} />
          
        </TouchableOpacity>
       
  
        <TouchableOpacity style={styles.buttonImagesett} onPress={() => navigation.navigate("HomeScreen")}>
          <Image source={require("../../assets/icons/ImageSettings.png")} style={styles.imageButtonsett} />
          
        </TouchableOpacity>        
       
      <View style={styles.ContainerInputs}>

        <View style={styles.textcontainer}>
        <Text style={styles.labelText}>Contraseña actual</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.blueText} value={""} />
        </View>

        <View style={styles.textcontainer}>
        <Text style={styles.labelText}>Nueva contraseña</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.blueText} value={""} />
        </View>
  
        <View style={styles.textcontainer}>
        <Text style={styles.labelText}>       Confirmar contraseña</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.blueText} value={""} secureTextEntry={true} />
        </View>
        </View>
        
  
        <CustomBottomBar goToProfile={goToProfile} goToHome={goToLogin} goToStats={goToProfile} />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f7fdfe",
      alignItems: "center",
      
    },
    ContainerInputs:{
      paddingTop:260  ,
      alignItems:'center'
    },
    title: {
      fontSize: 20,
      marginTop: 50,
    },
    buttonImage: {
      position: "absolute",
      top: 50,
      left: 10,
      zIndex: 1,
    },
    imageButton: {
      width: 60,
      height: 60,
    },
    buttonImagesett: {
      position: "absolute",
      top: 160,
      
      zIndex: 1,
    },
    imageButtonsett: {
      width: 350,
      height: 60,
    },

  

    textcontainer:{
        
    paddingRight:200,
    
    },
  
  
    inputContainer: {
      
      margin: 10,
      borderWidth:2,
      borderColor:'#aeb2b9',
      backgroundColor:'#eff5fe',
      width:320,
      borderRadius:10,
    },
    labelText: {
      color: "#979797",
      fontSize: 15,
      fontWeight:'800',
    
      
    },
    blueText: {
      color: "#1e5fb7",
      fontSize: 15,
      fontWeight:'900',
      margin:8
    },
  });
  
  export default CambioContraseña;