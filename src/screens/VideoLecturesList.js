import React, { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList, TextInput, StyleSheet, Image } from 'react-native';
import VideoComponent from './VideoComponent';
import UserContext from '../../context/UserContext';
import { BASE_APP_URL, APP_OWNER_NAME, APP_LINK_NAME } from '@env';
import Filter from './Filter';
import searchIcon from "../assets/search.png";

export default function VideoLecturesList({ navigation }) {
  const [allVideoLectures, setAllVideoLectures] = useState([]);
  const [filteredLectures, setFilteredLectures] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [baseFilteredLectures, setBaseFilteredLectures] = useState([]);

  const { accessToken } = useContext(UserContext);
  const [subject1Array, setSubject1Array] = useState([]);

  const getVideoLectures = async (token) => {
    try {
      const url = `${BASE_APP_URL}/${APP_OWNER_NAME}/${APP_LINK_NAME}/report/Copy_of_All_Lessons`;

      console.log('Fetching Data from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
        },
      });

      const result = await response.json();
      console.log("object::--", result.data);
      return result.data || [];

    } catch (error) {
      console.log('Error:', error);
      return [];
    }
  };

  const getSubjects = async (token) => {
    try {
      const url = `${BASE_APP_URL}/${APP_OWNER_NAME}/${APP_LINK_NAME}/report/All_Subjects`;

      console.log('Fetching Data from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
        },
      });

      const result = await response.json();
      console.log("object::--", result.data);
      return result.data || [];

    } catch (error) {
      console.log('Error:', error);
      return [];
    }
  };
  

  useEffect(() => {
    const getVideosData = async () => {
      const lectures = await getVideoLectures(accessToken);
      setAllVideoLectures(lectures);
      setFilteredLectures(lectures); // Initially show all lectures
      setBaseFilteredLectures(lectures);
      const subjects = await getSubjects(accessToken);
      const subject1Array = subjects.map(obj => obj.Subject1.trim());
      setSubject1Array(subject1Array);
      console.log("object::--", subject1Array);
    };
    getVideosData();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredLectures(baseFilteredLectures); // Reset to last filtered state
    } else {
      const filtered = baseFilteredLectures.filter((item) =>
        item.Chapter_Name_from_lookup.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLectures(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Image source={searchIcon} style={{ width: 15, height: 15 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Videos..."
            placeholderTextColor="#8C8C8C"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
        {
          allVideoLectures && (
            <Filter
              setFilteredData={(filteredData) => {
                setFilteredLectures(filteredData);
                setBaseFilteredLectures(filteredData); // Update baseFilteredLectures after filtering
              }}
              subjects = {subject1Array}
              allData={allVideoLectures}
            />
          )
        }
      </View>


      {/* Video List */}
      <FlatList
        data={filteredLectures}
        style={{ padding: 10 }}
        renderItem={({ item }) =>
          item?.Final_Lesson_URL?.url ? <VideoComponent data={item} navigation={navigation} /> : null
        }
        keyExtractor={(item) => item.ID.toString()}
      />

    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF1D6', // Light yellowish background
    borderRadius: 25,
    paddingHorizontal: 15,
    margin: 10,
    fontSize: 14,
    width: '75%',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

