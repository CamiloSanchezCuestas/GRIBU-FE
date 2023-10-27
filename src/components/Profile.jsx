import React from "react";
import {
    ScrollView,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import CustomBottomBar from './NavegationBar';

const Profile = () => {
    const goToLook = () => {
      navigation.navigate("Buscador");
    };
    const goToProfile = () => {
      navigation.navigate("Profile");
    };
    const goToLogin = () => {
      navigation.navigate("InicioSesion");
    };
  
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.buttonImage}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image source={require("../../assets/icons/return.png")} style={styles.imageButton} />
        </TouchableOpacity>
  
        <Image source={require("../../assets/icons/Profile.png")} style={styles.avatarImage} />
        <Text style={styles.changeAvatarText}>CAMBIAR AVATAR</Text>
        <View style={styles.textcontainer}>
        <Text style={styles.labelText}>Nombre</Text>
        </View>
       

        <View style={styles.inputContainer}>
          <TextInput style={styles.blueText} value={"Nicolas Montes"} />
        </View>

        <View style={styles.textcontainer}>
        <Text style={styles.labelText}>Usuario</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.blueText} value={"Nicomontes9"} />
        </View>
  
        <View style={styles.textcontainer}>
        <Text style={styles.labelText}>      Contraseña</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.blueText} value={"Contraseña"} secureTextEntry={true} />
        </View>
  
        <View style={styles.textcontainer}>
        <Text style={styles.labelText}>Correo</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.blueText} value={"nicomomej@gmail.com"} />
        </View>
  
        <CustomBottomBar goToProfile={goToProfile} goToHome={goToLogin} goToStats={goToProfile} />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
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
    textcontainer:{
        
    paddingRight:250,
    
    },
    avatarImage: {
      width: 130, 
      height: 130, 
      marginTop: 110,
      marginBottom:10
    },
    changeAvatarText: {
    
      fontSize: 22,
      color: "#27d8ff",
      fontWeight:'900',
      marginBottom:25
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
  
  export default Profile;