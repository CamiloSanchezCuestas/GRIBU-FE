import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';
import * as MediaLibrary from 'expo-media-library';
import CustomBottomBar from './NavegationBar';
import BackButton from './BackButton';

const Descargables = () => {
  const navigation = useNavigation();
 
  const goToProfile = () => {
     navigation.navigate('Profile');
     console.log('Yendo a perfil');
  };
 
  const goToHomeScreen = () => {
     navigation.navigate('HomeScreen');
     console.log('Yendo a home')
  };
  const goToVimeoPlayer = () => {
    navigation.navigate('VimeoPlayer');
    console.log('Yendo al player')
  };
  const downloadFile = async () => {
     try {
       
 
       const fileUri = 'https://github.com/SantiagoNeira21/ImagenesGRIBU/blob/main/CMUAA.png?raw=true.png';
       const extension = fileUri.split('.').pop();
       const { uri } = await FileSystem.downloadAsync(
         fileUri,
         FileSystem.documentDirectory + 'IMAGENCMUAA.' + extension
       );
       
       saveFile(uri);
 
     } catch (error) {
       console.error('Error while downloading:', error);
       Alert.alert('Download error', 'An error occurred while downloading the file.', [{ text: 'OK' }]);
     }
  };

  const downloadFile1 = async () => {
    try {
      

      const fileUri = 'https://github.com/SantiagoNeira21/ImagenesGRIBU/blob/main/CRETPEF.png?raw=true.png';
      const extension = fileUri.split('.').pop();
      const { uri } = await FileSystem.downloadAsync(
        fileUri,
        FileSystem.documentDirectory + 'IMAGENCMUAA.' + extension
      );
      
      saveFile(uri);

    } catch (error) {
      console.error('Error while downloading:', error);
      Alert.alert('Download error', 'An error occurred while downloading the file.', [{ text: 'OK' }]);
    }
 };

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
        
    } else {
        Alert.alert('Save to gallery permission denied', 'Please grant permission to save the file to the gallery.', [{ text: 'OK' }]);
    }
  }; 
  return (
    <View style={styles.container}>
      <View style={styles.BBContainer}>
        <BackButton
          goBack={goToVimeoPlayer}
        />
      </View>
      <View style={styles.header}>
        <Image source={require('../../assets/icons/TusHerramientas.png')} style={styles.imageH} resizeMode='contain' />
      </View>
      <View>
          <View style={styles.card}>
            <TouchableOpacity onPress={downloadFile}>
              <Image source={require('../../assets/images/CMUAA.png')} style={styles.imagepdf1} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity onPress={downloadFile1}>
              <Image source={require('../../assets/images/CRETPEF.png')} style={styles.imagepdf2} resizeMode='contain' />
            </TouchableOpacity>
          </View>
      </View>
      <CustomBottomBar goToProfile={goToProfile} goToHome={goToHomeScreen} goToStats={goToProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageH: {
    width: '90%',
    alignSelf: 'center'
    //height: '50%',
  },
  imagepdf1: {
    width: '100%',
    height: '90%',
  },
  imagepdf2: {
    width: '100%',
    height: '90%',
    marginTop: '-10%'
  },
  header: {
    justifyContent: 'center',
    marginBottom: '10%',
    marginTop: '25%',
    //backgroundColor: 'gray',
    height: '10%'
  },
  card: {
    width: '90%',
    height: '60%',
    padding: '0%',
    borderRadius: 8,
    alignSelf: 'center',
    //backgroundColor: 'gray',
    flexDirection: 'column',
  },
  BBContainer: {
    width: '16%',
    height: '8%',
    left: '2%',
    top: '5%'
    // backgroundColor: 'gray', //esto es para revisar como se comporta el contenedor
  },
});

export default Descargables;
