import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollViewBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Vimeo } from 'react-native-vimeo-iframe';
import StarRating from 'react-native-star-rating';
import CustomBottomBar from './NavegationBar';
import RutasRecomendadas from "./RutasRecomendadas";



import { ScrollView } from 'react-native-gesture-handler';
import BackButton from './BackButton';

const VimeoPlayer = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToHomeScreen = () => {
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
      <View style={styles.BBContainer}>
      <BackButton goBack={goToHomeScreen} />
      </View>

      <ScrollView>
        <Vimeo
          style={styles.vimeoPlayer}
          videoId={'702700301'}
          params={'api=1&autoplay=1'}
          handlers={videoCallbacks}
        />

        <View style={styles.grandcontainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Como recibir feedback negativo</Text>
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
            <TouchableOpacity onPress={() => navigation.navigate('Descargables')}>
              <Image
                source={require('../../assets/icons/Herramientas.png')}
                style={styles.ImageHerramientas}
                resizeMode="contain" // Aplicar resizeMode aquí
              />
            </TouchableOpacity>
            <Text style={styles.textButtom}>Mira tus herramientas aquí</Text>
          </View>
          <View style={styles.TextoRecContainer}>
            <Text style={styles.TextoRec}>Lecciones recomendadas</Text>
          </View>
          <View>
            <RutasRecomendadas goToHomeScreen={goToHomeScreen} />
          </View>
        </View>
      </ScrollView>
      <CustomBottomBar
        style={styles.navigation}
        goToProfile={goToProfile}
        goToHome={goToHomeScreen}
        goToStats={goToProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  starRatingContainer: {
    alignItems: 'flex-start',
    paddingLeft: '5%',
    paddingVertical: '2%',
  },
  textContainer: {
    alignItems: 'Left',
    marginLeft: '6%',
  },
  text: {   
    color: 'black',
    fontSize: 16,
    marginTop: '2%'
  },
  HerramientasContainer:{
    marginLeft: '4%', 

    width: '100%',
    height: '8%',
  },
  ImageHerramientas: {
    width: '10%',
    height: '90%',
    resizeMode: 'contain', 
  },
  textButtom:{
    fontStyle:'italic',
    fontWeight:'500',
    position: 'absolute',
    left: '10%',
    top: '20%'
  },

  TextoRecContainer:{
    paddingTop:'5%',
    marginLeft: '8%'
  },

  TextoRec:{
    fontSize:17,
    fontWeight:'900'
  },
  BBContainer: {
    width: '16%',
    height: '8%',
    left: '2%',
    top: '5%',
    
    marginBottom: '12%'
  },
  vimeoPlayer: {
    width: '100%',
    height: 228,
  }
});

export default VimeoPlayer;