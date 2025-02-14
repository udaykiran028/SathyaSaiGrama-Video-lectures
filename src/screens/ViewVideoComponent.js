import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Orientation from "react-native-orientation-locker";
import { Linking } from 'react-native';
import pdfIcon from '../assets/pdf.png';

const ViewVideoComponent = ({ route }) => {

    const { data } = route.params;
    let videoId = null
    if (data?.Final_Lesson_URL.url) {
        videoId = data?.Final_Lesson_URL.url.substring(data?.Final_Lesson_URL.url.lastIndexOf('/') + 1)
    }

    const playerRef = useRef(null);

    const handleFullScreenChange = (isFullScreen) => {
        console.log("object::--", isFullScreen);
        if (isFullScreen) {
            Orientation.lockToLandscape(); // Switch to landscape
        } else {
            Orientation.lockToPortrait(); // Switch back to portrait
        }
    };

    const handleImagePress = () => {
        if (data?.Final_Lesson_URL?.url) {
            Linking.openURL(data?.PDF_Drive_Link?.url);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <YoutubePlayer
                height={200}
                play={false}
                videoId={videoId}
                onFullScreenChange={handleFullScreenChange}
            />
            {
                data?.Chapter_Name_from_lookup &&
                <Text style={styles.title}>{data.Chapter_Name_from_lookup}</Text>
            }
            {
                data?.Instructor?.zc_display_value && data?.Chapter_Name_from_lookup && data?.Class_from_Chapter &&
                <>
                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.description}>
                        In this video, the instructor {data.Instructor.zc_display_value} teaches about {data.Chapter_Name_from_lookup}.
                        This video will cover the important aspects of the topic and will be useful for
                        the students of the class {data.Class_from_Chapter}.
                    </Text>
                </>
            }

            {
                data?.Duration_Mins &&
                <Text style={styles.label}>Duration: <Text style={styles.value}>{data.Duration_Mins} Minutes</Text></Text>
            }

            {
                data?.Subject_from_chapter &&
                <Text style={styles.label}>Subject: <Text style={styles.value}>{data.Subject_from_chapter}</Text></Text>
            }

            {
                data?.Medium_from_chapter &&
                <Text style={styles.label}>Medium: <Text style={styles.value}>{data.Medium_from_chapter}</Text></Text>
            }
            {
                data.Part &&
                <Text style={styles.label}>Part: <Text style={styles.value}>{data.Part}</Text></Text>
            }
            {
                data?.PDF_Drive_Link?.url &&
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.label}>Resource: </Text>
                    <TouchableOpacity onPress={handleImagePress}>
                        <Image source={pdfIcon} style={styles.image} />
                    </TouchableOpacity>
                </View>
            }

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: ' #FDF3F3',
        width: '100%',
        height: '100%',
    },
    image: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#AA0019',
        marginBottom: 10,

    },
    label: {
        fontSize: 16,
        color: '#AA0019',
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    value: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#555',
    },
});

export default ViewVideoComponent;
