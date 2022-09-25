import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Button, Image } from 'react-native';

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
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({ title: 'Updated!' })}
        />
      </View>
    );
  }

  function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./../assets/images/PizzaSteve.webp')}
      />
    );
  }

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
            <HomeStack.Navigator initialRouteName="Home">
                <HomeStack.Screen 
                  name="Home" 
                  component={Home} 
                  options={{
                    title: 'My Home',
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }} />
                <HomeStack.Screen 
                  name="Settings" 
                  component={Settings} 
                  options={{ headerTitle: (props) => <LogoTitle {...props}/>}} />
            </HomeStack.Navigator>
      );
}

export default HomeNavigator;