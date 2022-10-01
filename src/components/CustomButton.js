import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

function CustomButton(props) {
    return (
        <Pressable 
            onPress={props.onPress}
            style={styles.container}>
            <Text style={styles.text}>{props.buttonText}</Text>
        </Pressable>
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