import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    StatusBar,
    Text,
  } from 'react-native';

const AppNavContainer = () => {
    
    return (
        <NavigationContainer>
            <SafeAreaView>
                <StatusBar barStyle='dark-content'/>
                <Text>Hello Worldddd</Text>
            </SafeAreaView>
        </NavigationContainer>
      );
}

export default AppNavContainer;