import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { ViewModelInstance } from '../ViewModel';

const OrgCard = ({org}) => {
    if (org === null) {
        return <View></View>
    }
    return (
        <View style={styles.container}>
            <View style={{height:"80%",flex: 1, marginLeft: 20, justifyContent: 'space-evenly'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{org.name}</Text>
                <FlatList
                    data={org.events}
                    renderItem={({ item }) => <EventCard event={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    horizontal
                />
            </View>
        </View>
  )
}

const EventCard = ({event}) => {
    if (event === null) {
        return <View></View>
    }
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 20, marginHorizontal: 20, marginVertical: 10, padding: 10, height: 100, opacity: 0.9, shadowColor: '#000', shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
            <Image source={event.image} style={{width: 70, height: "50%", borderRadius: 20}}/>
            <View style={{height:"80%",flex: 1, marginLeft: 20, justifyContent: 'space-evenly'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{event.title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 10,
        height: 200,
        width: "100%",
        opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

  });

export default OrgCard