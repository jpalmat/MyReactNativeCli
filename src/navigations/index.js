import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    StatusBar,
    Text,
  } from 'react-native';
import HomeNavigator from './HomeNavigator';

const AppNavContainer = () => {
    
    return (
        <NavigationContainer>
            <HomeNavigator/>
        </NavigationContainer>
      );
}

export default AppNavContainer;