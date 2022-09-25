import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Button } from 'react-native';

function Contacts({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from contacts</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Settings', {
          itemId: 86,
          otherParam: 'pizza',
        })}
      />
      </View>
    );
  }

  function Settings({ route, navigation}) {
    const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from setting</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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