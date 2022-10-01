import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

function CustomInput(props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="hint" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        width: '100%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10

    },
    input: {

    }
})

export default CustomInput;