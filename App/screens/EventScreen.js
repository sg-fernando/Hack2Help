import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { assets } from '../constants';
import ViewModelInstance from '../ViewModel';
import { Friend, FriendsHeader, Request, FriendCard, OrgCard } from '../components';

const EventScreen = ({ event }) => {
    // var event = ViewModelInstance.events[0]
    return (
        <ImageBackground source={assets.gradient3} resizeMode="cover" style={styles.bg}>
            <View style={styles.container}>
                <Image source={event.image} style={styles.image}></Image>
                <Text style={{ fontSize: 45, fontWeight: 'bold' }}>{event.title}</Text> 
                <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Description: {"\n"}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'light' }}>{event.description}</Text>
                <View style={styles.eventAndTime}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{event.date}, {event.time}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Attending: {"\n"}</Text>
                    <FlatList
                        data={event.attendants}
                        renderItem={({ item }) => <Text style={{ fontSize: 17, fontWeight: 'light' }}>{item}</Text>}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{event.location}</Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        // justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        // justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flexDirection: 'column',
    },
    eventAndTime: {
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: 'rgba(252, 195, 255, 0.8)',
        flexDirection: 'row',

    }
});
export default EventScreen