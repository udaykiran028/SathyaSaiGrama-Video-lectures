import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const VideoComponent = ({ data, navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('ViewVideoComponent', { data })}
    >
      <LinearGradient
        colors={['#FDF3F3', '#FDF1D6']}
        style={styles.gradient}
      >
        <Text style={styles.title}>{data.Chapter_Name_from_lookup}</Text>
        <View style={styles.row}>
          <Text><Text style={{ color: "#AA0019" }}>Part:</Text> <Text style={styles.bold}>{data.Part}</Text></Text>
          <Text><Text style={{ color: "#AA0019" }}>Medium:</Text> <Text style={styles.bold}>{data.Medium_from_chapter}</Text></Text>
        </View>
        <Text><Text style={{ color: "#AA0019" }}>Subject:</Text> <Text style={styles.bold}>{data.Subject_from_chapter}</Text></Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
  
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
    overflow: 'hidden', // Ensures the gradient does not exceed the card's border radius
  },
  gradient: {
    padding: 16,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#AA0019',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#AA0019',
  },
});

export default VideoComponent;
