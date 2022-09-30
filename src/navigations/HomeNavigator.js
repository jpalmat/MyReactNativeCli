import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function HomeNavigator(props) {
  return (
    <ImageBackground 
    style={styles.background}
      source={require("../assets/images/pizza.jpeg")}>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})

export default HomeNavigator;