import { NavigationContainer } from '@react-navigation/native';
import { Text, SafeAreaView, View, StatusBar } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
      );
}

export default AppNavContainer;