import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import AppBar from './AppBar';
import Friend from './Friend';

export default function Zalo() {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Friend></Friend>
    </View>
  );
}
