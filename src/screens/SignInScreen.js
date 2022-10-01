import React, {useState} from 'react';
import { 
    Image, 
    SafeAreaView, 
    Text, 
    View, 
    StyleSheet,
    useWindowDimensions
 } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignIsPressed = () => {
        navigation.navigate('SignUpScreen');
    }

    
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image, {height: height * 0.2}}
                source={require("../assets/images/onStar.jpeg")}
                resizeMode="contain"
            />
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}/>
            <CustomInput
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                security={true}/>

            <CustomButton 
                buttonText="Log in" 
                onPress={onSignIsPressed}
                type="PRIMARY"/>
            <CustomButton 
                buttonText="Forget Password" 
                onPress={onSignIsPressed}
                type="TERTIARY"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        
    },
    image: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen;