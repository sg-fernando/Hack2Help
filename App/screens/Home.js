import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { assets } from '../constants';

export class Home extends Component {
  render() {
    return (
      <ImageBackground source={assets.gradient} resizeMode="cover" style={styles.image}>
        <View>
          <Text>Home</Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  image: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%',
  }
});

export default Home