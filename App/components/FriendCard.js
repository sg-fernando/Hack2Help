import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const FriendCard = ({ friend, handleRequest }) => {
    return (
        <View style={styles.containter}>
            <Image source={friend.image} style={styles.img}></Image>
            <View style={styles.nameContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{friend.firstname} {friend.lastname}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>@{friend.username}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containter: {
        flexDirection: 'column',
        alignItems: 'left',
        padding: 10,
        marginLeft: 10,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    nameContainer: {
        flexDirection: 'row',
    }
})

export default FriendCard