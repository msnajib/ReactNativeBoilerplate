import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './../stylesHome';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

export default Home;
