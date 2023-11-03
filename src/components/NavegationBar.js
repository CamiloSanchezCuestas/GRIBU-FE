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
    bottom: '0%',
    //left: '0%',
    width: '100%',
    height: '10%',
    backgroundColor: '#60eef9',
},
secondcontainer:{
    width: '90%',
    alignSelf: 'center',
    //flexDirection: 'row',  
  //paddingHorizontal: '10%',
    display: 'flex',
    flex: 1,
    //backgroundColor: 'gray'
},
ProfilePic: {
    width: '18%',
    height: '90%',
    top: '7%',
    //backgroundColor: 'green',
    left: '82%'
},
HomePic: {
    width: '20%',
    height: '100%',
    //backgroundColor: 'red',
    bottom: '90%'
},
StatsPic: {
    width: '20%',
    height: '90%',
    //backgroundColor: 'yellow',
    left: '62%',
    bottom: '200%'
  },
  
});

export default CustomBottomBar;