import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WhyWeDo = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>
          Educare - Values based education is the need of the hour
        </Text>
        <Text style={styles.paragraph}>
          It is a proven fact that the important formative years of a child are 
          between grades 6 and 12. These are the years when the child develops 
          academically, but more importantly emotionally! As the child moves 
          from teenage into adolescence, careful attention to every child’s 
          emotional and behavioural aspects becomes extremely important, so as 
          to help the child pick up the right value system, that could help the 
          child all through his or her life. Considerable time and efforts are 
          needed to groom the child as a complete personality, failing which it 
          can lead to lopsided development that can have adverse effects, 
          especially in today’s highly competitive world.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF7F5', // Soft background color
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
    lineHeight: 30,
    fontWeight: 600,
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    lineHeight: 24,
    width: '90%',
  },
});

export default WhyWeDo;
