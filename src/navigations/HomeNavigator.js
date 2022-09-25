import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, SafeAreaView } from 'react-native';

function Contacts() {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from contacts</Text>
      </View>
    );
  }

  function CreateContacts() {
    return (
      <View>
        <Text>Hi from creat contacts</Text>
      </View>
    );
  }

  function Settings() {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from setting</Text>
      </View>
    );
  }

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
            <HomeStack.Navigator initialRouteName="Contacts">
                <HomeStack.Screen name="Home" component={Contacts} />
                <HomeStack.Screen name="CreateContact" component={CreateContacts} />
                <HomeStack.Screen name="Settings" component={Settings} />
            </HomeStack.Navigator>
      );
}

export default HomeNavigator;