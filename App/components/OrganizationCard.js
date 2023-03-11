import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const OrganizationCard = ({ org }) => {
    return (
        <View style={styles.containter}>
            <View style={styles.nameContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{friend.name}</Text>
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
    nameContainer: {
        flexDirection: 'row',
    }
})

export default OrganizationCard