import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

function Location(props) {
    return (
        <View style={styles.container}>
            <MapView style={styles.maps} />
            <Text>Test</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    maps: {
        width: '100%',
        height: '100%'
    }
})

export default Location;