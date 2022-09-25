import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Button } from 'react-native';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from Home</Text>
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
            <HomeStack.Navigator initialRouteName="Home">
                <HomeStack.Screen name="Home" component={Home} options={{title: 'My Home'}} />
                <HomeStack.Screen name="Settings" component={Settings} options={({route}) => ({title: route.params.otherParam})} />
            </HomeStack.Navigator>
      );
}

export default HomeNavigator;