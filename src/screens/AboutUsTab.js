import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AboutUs from './AboutUs';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import WhyWeDo from './WhyWeDo';
import ContactUs from './ContactUs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#1E1E1E',
       headerShown: false,
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
     <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="WhatWeDo" component={WhatWeDo} />
        <Stack.Screen name="WhoWeAre" component={WhoWeAre} />
        <Stack.Screen name="WhyWeDo" component={WhyWeDo} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
      
  );
};

export default App;
