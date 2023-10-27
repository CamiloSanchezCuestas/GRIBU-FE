import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';
import * as MediaLibrary from 'expo-media-library';
import CustomBottomBar from './NavegationBar';

const Descargables = () => {
  const navigation = useNavigation();
 
  const goToProfile = () => {
     navigation.navigate('Profile');
  };
 
  const goToHomeScreen = () => {
     navigation.navigate('HomeScreen');
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
      <TouchableOpacity style={styles.buttonImage} onPress={() => navigation.navigate('VimeoPlayer')}>
        <Image source={require('../../assets/icons/return.png')} style={styles.imageButton} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={require('../../assets/icons/TusHerramientas.png')} style={styles.imageH} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.card}>
          <TouchableOpacity style={styles.cardTextContainer} onPress={downloadFile}>
            <Image source={require('../../assets/images/CMUAA.png')} style={styles.imagepdf1} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <TouchableOpacity style={styles.cardTextContainer} onPress={downloadFile1}>
            <Image source={require('../../assets/images/CRETPEF.png')} style={styles.imagepdf2} />
          </TouchableOpacity>
        </TouchableOpacity>
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
  buttonImage: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 1,
  },
  imageButton: {
    width: 60,
    height: 60,
  },
  imageH: {
    width: 380,
    height: 80,
  },
  imagepdf1: {
    width: 380,
    height: 220,
    marginLeft: 82,
    marginTop: -30,
  },
  imagepdf2: {
    width: 383,
    height: 228,
    marginLeft: 82,
    marginTop: -40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 120,
  },
  card: {
    width: 250,
    height: 250,
    padding: 16,
    marginLeft: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default Descargables;
