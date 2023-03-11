import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { assets } from '../constants';
import ViewModelInstance from '../ViewModel';
import { Friend, FriendsHeader, Request, FriendCard, OrgCard } from '../components';

const EventScreen = ({ event }) => {
    <ImageBackground source={assets.gradient} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{event.name}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'light'}}>{event.description}</Text>
        </View>
    </ImageBackground>
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flexDirection: 'column',
    }
});
export default EventScreen