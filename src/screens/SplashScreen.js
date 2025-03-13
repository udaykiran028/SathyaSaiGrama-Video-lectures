import {View, Text, Image} from 'react-native';
import React from 'react';
import logo from "../assets/logo.png";
const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        style={{width: '75%'}}
        resizeMode="contain"
        source={logo}
      />
    </View>
  );
};

export default SplashScreen;