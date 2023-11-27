import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const MainOtrasClases = ({ goToMOD1, goToMOD2 }) => {
  return (
    <View style={styles.supercontainer}>
      <TouchableOpacity onPress={goToMOD1} style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/ComuRuta.png")}
          style={styles.Image1}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToMOD2} style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/ComuRuta.png")}
          style={styles.Image2}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  supercontainer: {
    display: "flex",
    flexDirection: "Column",
    justifyContent: "space-around",
    marginTop: "-30%",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  Image1: {
    width: "90%",
    marginBottom: "-70%",
  },
  Image2: {
    width: "90%",
  },
});

export default MainOtrasClases;