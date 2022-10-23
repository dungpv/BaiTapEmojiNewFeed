import {View, Text} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
import News from './News';
import Feeds from './Feeds';

export default function NewFeed() {
  return (
    <View>
      <AppBar title="Feed"></AppBar>
      <News></News>
      <Feeds></Feeds>
    </View>
  );
}
