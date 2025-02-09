import React from 'react';
import { Text, View, FlatList } from 'react-native';

import VideoComponent from './VideoComponent';

export default function VideoLectureTab() {
  const DATA = [
    { id: '1', title: 'PRODUCT DESIGN', part: '1 OF 1', medium: 'ENGLISH', subject: 'MATHEMATICS' },
    { id: '2', title: 'PRODUCT DESIGN', part: '1 OF 1', medium: 'ENGLISH', subject: 'MATHEMATICS' },
    { id: '3', title: 'PRODUCT DESIGN', part: '1 OF 1', medium: 'ENGLISH', subject: 'MATHEMATICS' },
  ];

  return (
     <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <VideoComponent {...item} />}
    />
  );
}
