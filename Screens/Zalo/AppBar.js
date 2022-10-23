import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default function AppBar(props) {
  dataSearch = [
    {
      name: 'Wanda',
      image: require('../../assets/Zalo/wanda.jpg'),
    },
    {
      name: 'Yasuo',
      image: require('../../assets/Zalo/yasuo.jpg'),
    },
    {
      name: 'Captain',
      image: require('../../assets/Zalo/captain.jpg'),
    },
    {
      name: 'Flash',
      image: require('../../assets/Zalo/flash.jpg'),
    },
    {
      name: 'Iron man',
      image: require('../../assets/Zalo/ironman.jpeg'),
    },
    {
      name: 'Wonder',
      image: require('../../assets/Zalo/wonderwoman.jpg'),
    },
    {
      name: 'Black',
      image: require('../../assets/Zalo/blackwidow.jpeg'),
    },
    {
      name: 'Strange',
      image: require('../../assets/Zalo/strange.jpg'),
    },
  ];

  _renderIcon = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignSelf: 'baseline',
        }}>
        <Image source={data.image} style={styles.avatar}></Image>
        <Text style={styles.search__user__text}>{data.name}</Text>
      </TouchableOpacity>
    );
  };

  _renderIconList = () => {
    return this.dataSearch.map((data, index) => {
      return this._renderIcon(data, index);
    });
  };

  return (
    <View style={styles.search}>
      <View style={styles.search__text}>
        <Image
          style={styles.icon}
          source={require('../../assets/Zalo/history.png')}></Image>
        <Text style={styles.search__text__txt}>Danh sách tìm kiếm gần đây</Text>
      </View>
      <View style={styles.search__user}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {_renderIconList()}
        </ScrollView>
      </View>
    </View>
  );
}
