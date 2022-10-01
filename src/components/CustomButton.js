import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

function CustomButton(props) {
    return (
        <Pressable 
            onPress={props.onPress}
            style={[
                styles.container, 
                styles[`container_${props.type}`],
                props.bgColor ? {backgroundColor: props.bgColor} : {}
            ]}>
            <Text style={styles.text}>{props.buttonText}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding:15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: 'blue',
    },
    container_TERTIARY: {
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTAIRY: {
        color: 'grey'
    }
})

export default CustomButton;