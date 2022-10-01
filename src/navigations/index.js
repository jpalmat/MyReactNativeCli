import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

  const Stack = createNativeStackNavigator()

const AppNavContainer = () => {

    return (
        <NavigationContainer>
            {/* screenOptions={{headerShown: false}} */}
            <Stack.Navigator >
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppNavContainer;