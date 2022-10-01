import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function CustomButton(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>test</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        padding:15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})

export default CustomButton;