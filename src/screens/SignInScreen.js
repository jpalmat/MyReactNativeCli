import React from 'react';
import { 
    Image, 
    SafeAreaView, 
    Text, 
    View, 
    StyleSheet,
    useWindowDimensions
 } from 'react-native';
import CustomInput from '../components/CustomInput';

function SignInScreen(props) {
    const { height } = useWindowDimensions()
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image, {height: height * 0.2}}
                source={require("../assets/images/onStar.jpeg")}
                resizeMode="contain"
            />
            <CustomInput/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black'
        
    },
    image: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen;