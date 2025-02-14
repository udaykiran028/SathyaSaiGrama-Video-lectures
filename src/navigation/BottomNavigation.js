import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import VideoLectureTab from '../screens/VideoLectureTab';
import AboutUsTab from '../screens/AboutUsTab';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 70,
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor: '#FFE9B5',
          },
        }}
      >
        <Tab.Screen
          name="VideoLectureTab"
          component={VideoLectureTab}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 14 }}>
                <Image
                  source={require('../assets/video.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#B21E2B' : '#49454F',
                    marginTop: 10,
                  }}
                />
                <Text style={{
                  fontSize: 11,
                  width: 40,
                  color: focused ? '#B21E2B' : '#49454F',
                  marginTop: 4,  // Adds spacing between the image and text
                  textAlign: 'center'
                }}>
                  Videos
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AboutUsTab"
          component={AboutUsTab}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ flexDirection: 'column', alignItems: 'center',paddingTop: 14 }}>
                <Image
                  source={require('../assets/info.png')}
                  resizeMode="contain"
                  style={{
                    width: 28,
                    height: 28,
                    tintColor: focused ? '#B21E2B' : '#49454F',
                    marginTop: 10,
                  }}
                />
                <Text style={{
                  fontSize: 11,
                  width: 100,
                  color: focused ? '#B21E2B' : '#49454F',
                  marginTop: 4,  // Adds spacing between the image and text
                  textAlign: 'center'
                }}>About Us</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
