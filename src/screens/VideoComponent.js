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
          <Text><Text style={{ color: "#AA0019", fontSize:12}}>Part:</Text> <Text style={styles.bold}>{data.Part}</Text></Text>
          <Text><Text style={{ color: "#AA0019", fontSize:12 }}>Medium:</Text> <Text style={styles.bold}>{data.Medium_from_chapter}</Text></Text>
        </View>
        <Text><Text style={{ color: "#AA0019", fontSize:12 }}>Subject:</Text> <Text style={styles.bold}>{data.Subject_from_chapter}</Text></Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
  
const styles = StyleSheet.create({
  gradient: {
    padding: 16,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#AA0019',
    fontSize: 14,
    fontFamily: 'Poppins Italic',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily:'Poppins-Italic',
    color: '#AA0019',
  },
  card: {
    borderRadius: 10,
    marginVertical: 6,
    elevation: 3,
    fontFamily: 'Poppins-Italic',
    overflow: 'hidden', // Ensures the gradient does not exceed the card's border radius
  },
});

export default VideoComponent;
