import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import styles from './style';

export default class Emoji extends Component {
  datas = [
    {
      icon: 'like',
      image: require('../../assets/Emoji/like.png'),
    },
    {
      icon: 'love',
      image: require('../../assets/Emoji/love.png'),
    },
    {
      icon: 'care',
      image: require('../../assets/Emoji/care.png'),
    },
    {
      icon: 'haha',
      image: require('../../assets/Emoji/haha.png'),
    },
    {
      icon: 'sad',
      image: require('../../assets/Emoji/sad.png'),
    },
    {
      icon: 'angry',
      image: require('../../assets/Emoji/angry.png'),
    },
  ];

  state = {
    imgUrl: require('../../assets/Emoji/like.png'),
  };

  _renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.header__title}>Bạn đang cảm thấy thế nào?</Text>
      </View>
    );
  };

  _renderIconPrimary = () => {
    return (
      <View style={styles.body}>
        <TouchableOpacity>
          <Image style={styles.body__img} source={this.state.imgUrl}></Image>
        </TouchableOpacity>
      </View>
    );
  };

  _onChangeIconUrl = url => {
    this.setState({
      imgUrl: url,
    });
  };

  _renderIconItem = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          this._onChangeIconUrl(data.image);
        }}>
        <Image style={styles.footer_img} source={data.image}></Image>
      </TouchableOpacity>
    );
  };

  _renderIconList = () => {
    return this.datas.map((data, index) => {
      return this._renderIconItem(data, index);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        {this._renderIconPrimary()}
        <View style={styles.footer}>{this._renderIconList()}</View>
      </View>
    );
  }
}
