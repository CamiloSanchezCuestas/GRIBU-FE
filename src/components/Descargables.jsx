import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBottomBar from './NavegationBar';
import * as FileSystem from 'expo-file-system';

const Descargables = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const downloadFile = async () => {
    const fileUri = 'https://sheetjs.com/pres. Numbers';
    const fileUriComponents = fileUri.split('/');
    const fileName = fileUriComponents[fileUriComponents.length - 1];
    const destinationUri = `${FileSystem.documentDirectory}${fileName}`;

    const callback = (downloadProgress) => {
      const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
      console.log(progress);
    };

    const downloadResumable = FileSystem.createDownloadResumable(fileUri, destinationUri, {}, callback);

    try {
      const result = await downloadResumable.downloadAsync();
      if (result.status === 200) {
        console.log('File downloaded successfully:', result.uri);
      } else {
        console.error('Failed to download file. HTTP status:', result.status);
      }
    } catch (error) {
      console.error('Error while downloading:', error);
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
          <TouchableOpacity style={styles.cardTextContainer} onPress={() => navigation.navigate('VimeoPlayer')}>
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
    marginLeft: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default Descargables;
