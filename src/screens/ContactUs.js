import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>
          Ways of Engaging with Sri Sathya Sai Loka Seva Gurukulam 
          (Government, Corporates, Individuals)
        </Text>
        <Text style={styles.paragraph}>
          Our program draws its inspiration from the life and legacy of Sri Sathya 
          Sai Baba whose championing of the ideal of Education as a Service to 
          society has transformed many lives, families, and communities. Sri Sathya 
          Sai Baba was born in 1926 at Puttaparthi, a small, pastoral village in 
          India’s Andhra Pradesh State. He grew up to be loved and revered as a 
          humanitarian and a spiritual leader the world over. 

          His message of ‘Love All - Serve All’ and ‘Help Ever – Hurt Never’ formed 
          the basis for all the philanthropic work in the fields of Healthcare, 
          Education, and Nutrition. Baba’s simple yet effective teachings on life 
          and spirituality continue to guide us even today. His mission of touching 
          and transforming individuals and societies through acts of selfless 
          service is our guiding light.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3F3', // Soft background color
    padding: 20,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  heading: {
    fontSize: 24,
    color: '#AA0019', // Dark red heading
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 600,
    lineHeight: 35,
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    lineHeight: 24,
    width: '90%',
  },
});

export default ContactUs;
