import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const CustomBottomBar = ({ goToProfile, goToHome, goToStats }) => {
  return (
    <View style={styles.bottomBar}>
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
  );
};

const styles = {
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#60eef9',
},
ProfilePic: {
    width: 50,
    height: 50,
    marginTop: 10,
    position: 'absolute',
    right: 15
},
HomePic: {
    width: 65,
    height: 65,
    marginTop: 4,
    position: 'absolute',
    left: 15
},
StatsPic: {
    width: 57,
    height: 57,
    marginTop: 6,
    position: 'absolute',
    right: 75
  },
};

export default CustomBottomBar;