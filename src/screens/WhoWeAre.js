import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WhoWeAre = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Who We Are</Text>
        <Text style={styles.paragraph}>
          Sri Sathya Sai Loka Seva Gurukulam (SSSLSG) is a unit of Prashanti 
          Balamandira Trust (PBMT), which is a public charitable trust embedded 
          firmly on the principles of Sri Sathya Sai Baba towards rendering selfless 
          service to the needy with a unique blend of spiritual and intellectual education.
        </Text>

        <Text style={styles.heading}>Our Vision</Text>
        <Text style={styles.paragraph}>
          To provide high-quality, values-based holistic education, totally free of cost 
          to the deprived and needy children to create strong individuals with a 
          brilliant intellect, compassionate heart, and competent hands.
        </Text>

        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.paragraph}>
          To support the setup of one educational institution in each of the 
          600+ districts of India, imparting values-based holistic education, 
          thus serving as a model for other institutions in that region.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3F3', // Soft background similar to image
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: '#AA0019', // Dark red, similar to image
    marginBottom: 10,
    lineHeight: 35,
    textAlign: 'center',
    fontWeight: 600,
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
    width: '90%',
  },
});

export default WhoWeAre;
