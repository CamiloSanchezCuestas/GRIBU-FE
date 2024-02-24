import React from "react";
import { View, Image, TouchableOpacity, Text } from 'react-native';


const MainOtrasClases = ({ goToMOD1, goToMOD2 }) => {


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={goToMOD1}>
        <Image
          source={require('../../assets/images/ComuRuta.png')}
          style={{ width: 400, height: 130, marginBottom: 50, marginTop: 30, borderRadius: 15 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToMOD2}>
        <Image
          source={require('../../assets/images/ComuRuta.png')}
          style={{ width: 400, height: 130, borderRadius: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MainOtrasClases;




