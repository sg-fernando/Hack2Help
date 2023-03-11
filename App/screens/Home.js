import { Text, View } from 'react-native'
import React, { Component } from 'react'

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