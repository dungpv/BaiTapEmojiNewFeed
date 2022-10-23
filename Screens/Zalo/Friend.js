import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Friend() {
  dataSearch = [
    {
      name: 'Strange',
      image: require('../../assets/Zalo/strange.jpg'),
      friends: '15 bạn chung',
    },
    {
      name: 'Super Girl',
      image: require('../../assets/Zalo/suppergirl.jpg'),
      friends: '14 bạn chung',
    },
    {
      name: 'Wonder Woman',
      image: require('../../assets/Zalo/wonderwoman.jpg'),
      friends: '13 bạn chung',
    },
    {
      name: 'Black Widow',
      image: require('../../assets/Zalo/blackwidow.jpeg'),
      friends: '12 bạn chung',
    },
    {
      name: 'Spiderman',
      image: require('../../assets/Zalo/spiderman.jpeg'),
      friends: '11 bạn chung',
    },
    {
      name: 'Yasuo',
      image: require('../../assets/Zalo/yasuo.jpg'),
      friends: '10 bạn chung',
    },
    {
      name: 'Captain',
      image: require('../../assets/Zalo/captain.jpg'),
      friends: '9 bạn chung',
    },
    {
      name: 'Flash',
      image: require('../../assets/Zalo/flash.jpg'),
      friends: '8 bạn chung',
    },
    {
      name: 'Iron man',
      image: require('../../assets/Zalo/ironman.jpeg'),
      friends: '7 bạn chung',
    },
  ];

  return (
    <View style={styles.search}>
      <View style={styles.search__text}>
        <Image
          style={styles.icon}
          source={require('../../assets/Zalo/user-account.png')}></Image>
        <Text style={styles.search__text__txt}>Gợi ý kết bạn</Text>
      </View>
      <View
        style={{
          borderRadius: 15,
          height: 100,
          marginHorizontal: 10,
          marginVertical: 10,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#d3d3d3',
        }}>
        <Image
          style={styles.avatar}
          source={require('../../assets/Zalo/strange.jpg')}></Image>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 14, fontWeight: '600'}}>Strange</Text>
          <Text>15 bạn chung</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            borderRadius: 20,
            padding: 5,
            backgroundColor: '#9370db',
            fontSize: 14,
            fontWeight: '500',
          }}>
          <Text>Kết bạn</Text>
        </View>
      </View>
    </View>
  );
}
