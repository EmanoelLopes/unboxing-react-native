/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Alert,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class App extends Component {
  render() {  
    const text = 'React Native is AWESOME!';
    const imageURL = {
      uri: 'https://picsum.photos/200/300/?random'
    };

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Image source={imageURL} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
});
