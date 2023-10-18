import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Vimeo } from 'react-native-vimeo-iframe';
import { useNavigation } from '@react-navigation/native';
import CustomBottomBar from './NavegationBar';

const videoCallbacks = {
  timeupdate: (data) => console.log('timeupdate: ', data),
  play: (data) => console.log('play: ', data),
  pause: (data) => console.log('pause: ', data),
  fullscreenchange: (data) => console.log('fullscreenchange: ', data),
  ended: (data) => console.log('ended: ', data),
};

const VimeoPlayer = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToLogin = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonImage} onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../../assets/icons/return.png')} style={styles.imageButton} />
      </TouchableOpacity>

      <Vimeo videoId={'835587844'} params={'api=1&autoplay=1'} handlers={videoCallbacks} style={styles.vimeoPlayer} />

      <CustomBottomBar
        style={styles.navigation}
        goToProfile={goToProfile}
        goToHome={goToLogin}
        goToStats={goToProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    paddingBottom: 220,
    backgroundColor: '#FFFF',
  },
  vimeoPlayer: {
    marginHorizontal: 10, // Aplicar un margen horizontal de 10
  },
  navigation: {},
});

export default VimeoPlayer;
