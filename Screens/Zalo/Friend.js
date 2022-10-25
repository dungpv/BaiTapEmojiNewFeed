import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Friend() {
  dataFriends = [
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
      name: 'Scarlet Witch',
      image: require('../../assets/Zalo/wanda.jpg'),
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

  _renderFriendItem = data => {
    return (
      <View style={styles.friend__item}>
        <Image style={styles.avatar} source={data.item.image}></Image>
        <View style={styles.friend__item__middle}>
          <Text style={styles.friend__item__middle__txt}>{data.item.name}</Text>
          <Text>{data.item.friends}</Text>
        </View>
        <View style={styles.friend__item__button}>
          <Text>Kết bạn</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.search}>
      <View style={styles.search__text}>
        <Image
          style={styles.icon}
          source={require('../../assets/Zalo/user-account.png')}></Image>
        <Text style={styles.search__text__txt}>Gợi ý kết bạn</Text>
      </View>
      <FlatList
        data={dataFriends}
        renderItem={data => _renderFriendItem(data)}
        keyExtractor={data => data.name}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}></FlatList>
    </View>
  );
}
