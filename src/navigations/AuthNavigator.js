import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, SafeAreaView } from 'react-native';

function Login() {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from login</Text>
      </View>
    );
  }

  function SingUp() {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from singup</Text>
      </View>
    );
  }

const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="SignUp" component={SingUp} />
          </AuthStack.Navigator>
      );
}

export default AuthNavigator;