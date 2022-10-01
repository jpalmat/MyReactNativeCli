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

function SignInScreen(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { height } = useWindowDimensions()
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

            <CustomButton/>
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