import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import BottomNavigation from './src/navigation/BottomNavigation';
import {
  DATABASE_ID,
  COLLECTION_ID,
  APPWRITE_FUNCTION_PROJECT_ID,
  APPWRITE_API_KEY,
} from '@env';
import UserContext from './context/UserContext';
import DotsBlinkingLoaderEllipsis from './src/screens/DotsBlinkingLoaderEllipsis';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isNetworkAvailable, setIsNetworkAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
  const [dotsBlinkingLoaderEllipsis,setDotsBlinkingLoaderEllipsis] =useState(true);

  const {
    accessToken,
    setAccessToken
  } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsNetworkAvailable(state.isConnected);
    });

    return () => unsubscribe();
  }, []);
  console.log("Document: ", DATABASE_ID, COLLECTION_ID, APPWRITE_FUNCTION_PROJECT_ID, APPWRITE_API_KEY)
  
  const getAppWriteToken = async () => {
    try {
      if (!isNetworkAvailable) return; // Stop if no network

      let res = await fetch(
        `https://cloud.appwrite.io/v1/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Appwrite-Project': APPWRITE_FUNCTION_PROJECT_ID,
            'X-Appwrite-Key': APPWRITE_API_KEY,
          },
        }
      );
      res = await res.json();
      console.log(res.documents[0].Token)
      await setAccessToken(res.documents[0].Token);
      setIsTokenFetched(true);
    } catch (error) {
      console.log('Error fetching AppWrite token:', error);
    }
  };

    useEffect(() => {
    const fetchToken = async () => {
      await getAppWriteToken();
      if (!isNetworkAvailable) return;
    };
    
    if (isNetworkAvailable) {
      fetchToken();
    }
  }, [isNetworkAvailable]);

  useEffect(() => {
    if (accessToken) {
      console.log("Access token found, stopping loading", accessToken);
      setLoading(false);
      setDotsBlinkingLoaderEllipsis(false)
    } else {
      console.log("Access token missing, still loading");
    }
  }, [accessToken]);

  return (
    <>
   {loading ? dotsBlinkingLoaderEllipsis?(<DotsBlinkingLoaderEllipsis />): (
        <ActivityIndicator
          size="large"
          color="#752A26"
          style={styles.loadingContainer}
        />
      ) : (
      <BottomNavigation />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
