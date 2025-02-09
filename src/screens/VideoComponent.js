import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VideoComponent = ({ title, part, medium, subject }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Text><Text style={{color:"#AA0019"}}>Part:</Text> <Text style={styles.bold}>{part}</Text></Text>
        <Text><Text style={{color:"#AA0019"}}>Medium:</Text> <Text style={styles.bold}>{medium}</Text></Text>
      </View>
      <Text><Text style={{color:"#AA0019"}}>Subject:</Text> <Text style={styles.bold}>{subject}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FDF1D6',
    fontFamily: 'Poppins',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
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
