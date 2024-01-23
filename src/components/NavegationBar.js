import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CustomBottomBar = ({ goToProfile, goToHome, goToStats }) => {
  
  return (
    <View style={styles.bottomBar}>
      <View style={styles.secondcontainer}>
      <TouchableOpacity onPress={goToProfile}>
        <Image
          source={require('../../assets/icons/Profile.png')}
          style={styles.ProfilePic}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToHome}>
        <Image
          source={require('../../assets/icons/Home.png')}
          style={styles.HomePic}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToStats}>
        <Image
          source={require('../../assets/icons/Stats.png')}
          style={styles.StatsPic}
          resizeMode="contain"
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  bottomBar: {
    position: 'absolute',
    bottom: 25,
    
    
    width: '100%',
    height: '8%',
    backgroundColor: '#60eef9',
},
secondcontainer:{
    width: '100%',
    alignSelf: 'center',
    display: 'flex',
    flex: 1,
   
},
ProfilePic: {
    width: '18%',
    height: '90%',
    top: '7%',
    
    left: '82%'
},
HomePic: {
    width: '20%',
    height: '100%',

    bottom: '90%'
},
StatsPic: {
    width: '20%',
    height: '90%',
    left: '62%',
    bottom: '200%'
  },
  
});

export default CustomBottomBar;