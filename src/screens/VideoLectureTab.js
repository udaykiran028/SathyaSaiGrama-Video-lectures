import React, { useContext, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import VideoLecturesList from './VideoLecturesList';
import ViewVideoComponent from './ViewVideoComponent';

export default function VideoLectureTab({navigation}) {
  const VideosStack = createNativeStackNavigator()

  return (
      <VideosStack.Navigator screenOptions={{
        headerTintColor: '#1E1E1E',
        headerStyle: {
          backgroundColor: '#FFD8E4', // Background color of the header
        },
          headerTitleStyle: {
            fontFamily: 'Subheading',
            fontSize: 18,
            fontWeight: '800',
            textAlign: 'center',
            fontStyle: 'normal',
          },
      }}>
        <VideosStack.Screen  name="VideoLecturesList" component={VideoLecturesList} options={{ headerShown: false}}/>
        <VideosStack.Screen name="ViewVideoComponent" component={ViewVideoComponent} options={{ headerShown: false}} />
      </VideosStack.Navigator>
  )
}