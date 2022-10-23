import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

export default function News() {
  dataNews = [
    {
      name: 'Sahara',
      image: require('../../assets/NewFeed/images/image2.jpeg'),
    },
    {
      name: 'Sophia',
      image: require('../../assets/NewFeed/images/image3.jpeg'),
    },
    {
      name: 'Hana',
      image: require('../../assets/NewFeed/images/image4.jpeg'),
    },
    {
      name: 'Naul',
      image: require('../../assets/NewFeed/images/image5.jpeg'),
    },
    {
      name: 'Kimi',
      image: require('../../assets/NewFeed/images/image6.jpeg'),
    },
    {
      name: 'Yoko',
      image: require('../../assets/NewFeed/images/image1.jpeg'),
    },
    {
      name: 'Su',
      image: require('../../assets/NewFeed/images/image7.jpeg'),
    },
    {
      name: 'Finnia',
      image: require('../../assets/NewFeed/images/image8.jpeg'),
    },
    {
      name: 'Subana',
      image: require('../../assets/NewFeed/images/image9.jpeg'),
    },
    {
      name: 'Corohe',
      image: require('../../assets/NewFeed/images/image10.jpeg'),
    },
  ];

  _renderIcon = (data, index) => {
    return (
      <TouchableOpacity key={index} style={{flex: 1}}>
        <Image source={data.image} style={styles.avatar}></Image>
        <Text style={styles.news__text}>{data.name}</Text>
      </TouchableOpacity>
    );
  };

  _renderIconList = () => {
    return this.dataNews.map((data, index) => {
      return this._renderIcon(data, index);
    });
  };

  return (
    <View style={styles.news}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {_renderIconList()}
      </ScrollView>
    </View>
  );
}
