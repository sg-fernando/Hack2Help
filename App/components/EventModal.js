import { View, Text } from 'react-native'
import React from 'react'

const EventModal = () => {
    return (
        <View style={styles.container}>
            <View style={styles.eachOption}>
                <Image source={data.logo} style={styles.logoStyle} />
                <Text style={styles.textStyle}>
                    {data.name}
                </Text>
            </View>
        </View>
    );
}

export default EventModal