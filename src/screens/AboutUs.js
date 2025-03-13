import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AboutUs= ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/sai-baba.png')} style={styles.image} />
      <Text style={styles.quote}>The End of Education is Character</Text>
      <Text style={styles.author}>- Bhagawan Sri Sathya Sai Baba</Text>
      <View style={styles.line}> </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('WhatWeDo')}>
          <Text style={styles.menuItem}>What We Do</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WhoWeAre')}>
          <Text style={styles.menuItem}>Who We Are</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WhyWeDo')}>
          <Text style={styles.menuItem}>Why We Do</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
          <Text style={styles.menuItem}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: { width: '80%', height: '0.5%', backgroundColor:'#AA0019', marginTop: 10, marginBottom:10 },
  container: { flex: 1, alignItems: 'center', backgroundColor: '#FDF3F3' },
  image: { width: 150, height: 150, borderRadius: 75, marginTop: 40 },
  quote: { color: '#AA0019', fontSize: 14, marginTop: 10, textAlign: 'center',fontWeight: 500 },
  author: { color: '#AA0019', fontStyle: 'italic', marginBottom: 10 ,fontWeight: 400,fontSize: 12},
  menuContainer: { backgroundColor: '#fff2cc', padding: 20, borderRadius: 10, marginTop: 20, width: '90%', alignItems: 'center' },
  menuItem: {  fontSize: 16, marginVertical: 10, textDecorationLine: 'underline',color:'#AA0019',fontWeight: 600,lineHeight: 35 },
});

export default AboutUs;
