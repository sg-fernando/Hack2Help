import { Text, View, ImageBackground } from 'react-native'
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

export default Home