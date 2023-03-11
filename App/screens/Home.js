import { useCallback, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ImageBackground, StyleSheet, Dimensions} from 'react-native'
import { assets } from '../constants'
import { EventCard, OrgCard } from '../components'
import React from 'react'

import ViewModelInstance from '../ViewModel'

const Home = () => {
    const [index, setIndex] = useState(0);

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        setIndex(viewableItems[0].index);
    }, []);
    var list = [{id:0,val:<Attending/>}, {id:1,val:<Organizations/>}]
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

const Organizations = () => {
    return (
        <View style={{ flex: 1, width: Dimensions.get('window').width }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Organizations</Text>
            <FlatList
            data={ViewModelInstance.getOrganizations()}
            renderItem={({ item }) => <OrgCard org={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
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