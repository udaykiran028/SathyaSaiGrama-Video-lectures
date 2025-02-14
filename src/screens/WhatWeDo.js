import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WhatWeDo = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.heading}>
            Empowering the Nation Through Education
          </Text>
          <Text style={styles.paragraph}>
            True education shines in the beauty of the spirit and of highest
            wisdom. It is effulgence that permeates a full life and leads every
            human toward the attainment of his real nature through purification
            and sublimation of his consciousness.
          </Text>
          <Text style={styles.paragraph}>
            This inspiration cannot be achieved through the mere perusal of
            books and acquisition of a predetermined set of skills. Learning
            without intensive cultivation of the spirit proves barren.
          </Text>
          <Text style={styles.quote}>
            "The saddest aspect of life right now is that science gathers
            knowledge faster than society gathers wisdom."
          </Text>
          <Text style={styles.author}>— Isaac Asimov</Text>
          <Text style={styles.paragraph}>
            The modern educational system is producing students with
            information-based knowledge rather than transformational knowledge.
            This has resulted in overt acts of violence, unrest, and a lack of
            peace and understanding in society.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor:'#FDF3F3',
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  heading: {
    fontSize: 24,
    color: '#AA0019',
    textAlign: 'center',
    fontWeight: 600,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    textAlign: 'justify',
    width: '90%',
    marginBottom: 15,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    width: '90%',
    textAlign: 'right',
  },
});

export default WhatWeDo;
