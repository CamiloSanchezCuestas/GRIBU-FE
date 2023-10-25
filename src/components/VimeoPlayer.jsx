import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Vimeo } from 'react-native-vimeo-iframe';
import StarRating from 'react-native-star-rating';
import CustomBottomBar from './NavegationBar';

const VimeoPlayer = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToLogin = () => {
    navigation.navigate('HomeScreen');
  };

  const onStarRatingPress = (rating) => {
    setRating(rating);
    console.log(`Has seleccionado ${rating} estrellas`);
    
  };

  const videoCallbacks = {
    timeupdate: (data) => console.log('timeupdate: ', data),
    play: (data) => console.log('play: ', data),
    pause: (data) => console.log('pause: ', data),
    fullscreenchange: (data) => console.log('fullscreenchange: ', data),
    ended: (data) => console.log('ended: ', data),
  };

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonImage} onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../../assets/icons/return.png')} style={styles.imageButton} />
      </TouchableOpacity>

      <Vimeo
        style={styles.vimeoPlayer}
        videoId={'702700301'}
        params={'api=1&autoplay=1'}
        handlers={videoCallbacks}c
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Como recibir feedback negativo
        </Text>
      </View>

      <View style={styles.starRatingContainer}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => onStarRatingPress(rating)}
          starSize={25}
          fullStarColor="gold"
        />
      </View>

      <View style={styles.HerramientasContainer}>
      <Text style={styles.textButtom}>
      <TouchableOpacity style={styles.HerramientasImage} onPress={() => navigation.navigate('Descargables')}>
        <Image source={require('../../assets/icons/Herramientas.png')} style={styles.ImageHerramientas} />
      </TouchableOpacity>
      hola
      </Text>
      </View>

      

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
    paddingBottom: 100,
    backgroundColor: '#FFFF',
  },
  vimeoPlayer: {
    margin: 10,
    top:60
  },
  starRatingContainer: {
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingBottom:10
   
  },
  textContainer: {
    backgroundColor: '#f5f4f4',
    margin: 10,
    alignItems: 'Left',
    
  },
  text: {   
    color: 'black',
    fontSize: 16,
    marginLeft:5
  },



  HerramientasContainer:{
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingBottom:220 

  },
  ImageHerramientas:{
    width: 40,
    height: 40,

  },

  HerramientasImage:{
    paddingLeft:0,

  },

  textButtom:{



}

});

export default VimeoPlayer;