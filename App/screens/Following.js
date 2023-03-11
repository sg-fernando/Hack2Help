import { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { assets } from '../constants';
import ViewModelInstance from '../ViewModel';
import { Friend, FriendsHeader, Request, FriendCard, OrgCard } from '../components';

const Following = ({ navigation }) => {
    const orderSwipe = [{ id: 1, val: <Organizations /> }, { id: 2, val: <People handleRequest={handleRequest} /> }]
    const [list, setList] = useState(orderSwipe);
    const [index, setIndex] = useState(0);

    const handleRequest = (val, person) => {
        if (val === 1) {
            ViewModelInstance.acceptRequest(person);
        } else {
            ViewModelInstance.declineRequest(person);
        }
        setList([{ id: 1, val: <Organizations /> }, { id: 2, val: <People handleRequest={handleRequest} /> }]);
    };

    const handleSearch = (value) => {
        ViewModelInstance.searchFollowing(value);
        setList([{ id: 1, val: <Organizations /> }, { id: 2, val: <People handleRequest={handleRequest} /> }]);
    };

    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        setIndex(viewableItems[0].index);
        ViewModelInstance.followingIndex = viewableItems[0].index;
    }, []);


    return (
        <ImageBackground source={assets.gradient3} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={{ flex: 1 }}>
                <FriendsHeader index={index} onSearch={handleSearch} />
                <FlatList
                    ref={(ref) => {
                        ViewModelInstance.FriendListRef = ref;
                    }}
                    onViewableItemsChanged={onViewableItemsChanged}
                    style={{ width: Dimensions.get('window').width }}
                    horizontal
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
    );
}

const People = ({ handleRequest }) => {
    return (
        <View style={{ flex: 1, width: Dimensions.get('window').width }}>
            <FlatList
                data={ViewModelInstance.searchFriendsResults}
                renderItem={({ item }) => <FriendCard friend={item} handleRequest={handleRequest}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const Organizations = () => {
    return (
        <View style={{ flex: 1, width: Dimensions.get('window').width }}>
            <FlatList
                data={ViewModelInstance.getOrganizations()}
                renderItem={({ item }) => <OrgCard org={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});
export default Following;