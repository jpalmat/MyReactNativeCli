import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    StatusBar,
    Text,
  } from 'react-native';
import HomeNavigator from './HomeNavigator';
import ViewImageScreen from './ViewImageScreen';

const AppNavContainer = () => {
    
    return (
        <NavigationContainer>
            <ViewImageScreen/>
        </NavigationContainer>
      );
}

export default AppNavContainer;