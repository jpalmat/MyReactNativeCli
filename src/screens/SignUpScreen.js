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

function SignUpScreen(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const onRegisterPressed = () => {
        alert('button pressed')
    }

    const termsPressed = () => {
        alert('terms pressed');
    }

    const { height } = useWindowDimensions()
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Create and account</Text>
            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}/>
            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}/>
            <CustomInput
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                security={true}/>
            <CustomInput
                placeholder="Confirm Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                security={true}/>

            <CustomButton 
                buttonText="Register" 
                onPress={onRegisterPressed}
                type="PRIMARY"/>
            <Text style={styles.text}>You accept our 
                <Text 
                    style={styles.textTerms}
                    onPress={termsPressed}>Terms</Text>
            </Text>
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
    },
    text: {
        color: 'white'
    },
    textTerms: {
        color: 'orange'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 10
    }
})

export default SignUpScreen;