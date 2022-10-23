import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Feeds() {
  const dataFeeds = [
    {
      title: 'Lorem Ipsum is simply dummy text',
      name: 'Sahara',
      image: require('../../assets/NewFeed/images/image1.jpeg'),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: '1 minutes',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
      name: 'Sophia',
      image: require('../../assets/NewFeed/images/image2.jpeg'),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: '3 minutes',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
      name: 'Hana',
      image: require('../../assets/NewFeed/images/image3.jpeg'),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: '5 minutes',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
      name: 'Naul',
      image: require('../../assets/NewFeed/images/image4.jpeg'),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: '10 minutes',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
      name: 'Kimihana',
      image: require('../../assets/NewFeed/images/image5.jpeg'),
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: '1 minutes',
    },
  ];

  _renderFeedItem = data => {
    return (
      <View style={styles.feed}>
        <View style={styles.feed__header}>
          <View style={styles.feed__header__avatar}>
            <Image source={data.item.image} style={styles.avatar}></Image>
          </View>

          <View style={styles.feed__header__text}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>
              {data.item.title}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>{data.item.name}</Text>
              <Text>{data.item.time}</Text>
            </View>
          </View>
          <View style={styles.feed__header__threedot}>
            <Image
              source={require('../../assets/NewFeed/ellipsis.png')}
              style={styles.feed__header__icon}></Image>
          </View>
        </View>
        <View style={styles.feed__body}>
          <Text style={styles.feed__body__text}>{data.item.content}</Text>
        </View>
        <View style={styles.feed__comment}>
          <View style={styles.feed__comment__love}>
            <Image
              source={require('../../assets/NewFeed/heart.png')}
              style={styles.feed__comment__icon}></Image>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: '500',
                paddingTop: 3,
              }}>
              2
            </Text>
          </View>
          <View style={styles.feed__comment__love}>
            <Image
              source={require('../../assets/NewFeed/comment.png')}
              style={styles.feed__comment__icon}></Image>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: '500',
                paddingTop: 3,
              }}>
              4
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={dataFeeds}
        renderItem={data => _renderFeedItem(data)}
        keyExtractor={data => data.name}
        showsVerticalScrollIndicator={false}></FlatList>
    </View>
  );
}
