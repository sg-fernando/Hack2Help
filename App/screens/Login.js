import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TouchableHighlight, TextInput, ImageBackground, Image, View } from 'react-native';
import { COLORS, SIZES, FONTS, assets } from '../constants';
import { Ionicons } from '@expo/vector-icons';

import ViewModelInstance from '../ViewModel';

export default function Login({ navigation }) {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePass] = React.useState('');

    const color = COLORS.pastel_pink;
    const size = SIZES.font;
  return (
    <ImageBackground source={assets.gradient} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>

        {/* Box with transparent and blur */}
        <View style={styles.box}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    onChangeText={(val) => onChangeUsername(val)}
                    placeholder={"Username"}
                    value={username}
                    placeholderTextColor="#DDD" 
                    />
                </View>
                <TextInput
                style={styles.input}
                onChangeText={(val) => onChangePass(val)}
                placeholder={"Password"}
                value={password}
                placeholderTextColor="#DDD" 
                />
                <TouchableHighlight
                style={styles.loginButton}
                onPress={() => ViewModelInstance.login(username, password, navigation)}
                underlayColor="#DDDDDD">
                <Text style={styles.loginText}>Log In</Text>
                </TouchableHighlight>
                <Text style={styles.createAccount}>New to Huddle? Create An Account</Text>

        </View>
        <StatusBar style="auto" />

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.pastel_darker_blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.title,
    paddingBottom: "3%",
    color: "white",
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SIZES.extraLarge,
    paddingBottom: "8%",
    paddingLeft: "20%",
    paddingRight: "20%",
    paddingTop: "0%",
    color: COLORS.gray,
    textAlign: 'center'
  },
  normalText: {
    fontSize: SIZES.medium,
    color: COLORS.white
  },
  input: {

  },
  loginButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    paddingTop: "3%",
    paddingBottom: "3%",
    width: "40%",
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.white
  },
  loginText: {
    color: COLORS.white,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: SIZES.medium
  },
  createAccount: {
    paddingTop: "10%",
    paddingBottom: 5,
    color: COLORS.pastel_light_blue,
    textDecorationLine: 'underline',
    fontSize: SIZES.medium
  },
  tinyLogo: {
    width: 170,
    height: 170,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
    box: {
        backgroundColor: "black",
        opacity: 0.5,
        borderColor: COLORS.white,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        height: "60%",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    inputContainer: {
        margin: "5%",
        borderBottomWidth: 1,
        padding: "0%",
        color: COLORS.white,
        borderColor: COLORS.white,
        height: "6%",
        width: "60%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
