import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps'
const myTattoo = require('../assets/images/myTattoo.webp')
const mePhoto = require('../assets/images/me.jpg')

function Location(props) {
    const [userone, setUserone] = useState({
        latitude: 42.517149,
        longitude: -83.045274
    });
    const [usertwo, setUsertwo] = useState({
        latitude: 42.417149,
        longitude: -83.145274
    });
    return (
        <View style={styles.container}>
            <MapView 
                style={styles.maps} 
                initialRegion={{
                    latitude: userone.latitude,
                    longitude: userone.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.6
                }}
            >
                {/* <Marker 
                    coordinate={userone}
                    // image={mePhoto}
                /> */}
                {/* <Marker coordinate={usertwo} ></Marker> */}
            </MapView>
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