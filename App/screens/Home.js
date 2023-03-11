import { useCallback, useState } from 'react';
import { View,Pressable, Button, Text, SafeAreaView, FlatList, ImageBackground, StyleSheet, Dimensions} from 'react-native'
import { assets } from '../constants'
import { EventCard, OrgCard } from '../components'
import React from 'react'

import ViewModelInstance from '../ViewModel'
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {
    const [index, setIndex] = useState(0);

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        setIndex(viewableItems[0].index);
    }, []);
    var list = [{id:0,val:<Attending/>}, {id:1,val:<Suggested/>}]
  return (
    <ImageBackground source={assets.gradient} resizeMode="cover" style={styles.image}>
        <SafeAreaView>

            <FlatList
                onViewableItemsChanged={onViewableItemsChanged}
                style={{ width: Dimensions.get('window').width, height: "100%" }}
                vertical
                pagingEnabled
                data={list}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        item.val
                    );
                }}
            />
            <SphereButton onPress={navigation.navigate("CreateEvent")} />
        </SafeAreaView>
    </ImageBackground>
  )
}

const Attending = () => {
    return (
        <View style={{ flex: 1, width: Dimensions.get('window').width }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Attending</Text>
            <FlatList
            data={ViewModelInstance.getAttending()}
            renderItem={({ item }) => <EventCard event={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const Suggested = () => {
    return (
        <View style={{ flex: 1, width: Dimensions.get('window').width }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Suggested</Text>
            <FlatList
            data={ViewModelInstance.getSuggested()}
            renderItem={({ item }) => <EventCard event={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const SphereButton = ({ onPress }) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress}>
                <View style={styles.button}>
                    <Text style={{color: 'white', fontSize: 35}}>+</Text>
                </View>
            </Pressable>
        </View>
    );
  };

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        position: 'absolute',
        top: 55,
        right: 20,
      },
      button: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#e0b4fc',
        borderColor: 'white',
        borderWidth: 2,
      },
  });

export default Home