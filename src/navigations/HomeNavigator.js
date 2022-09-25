import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Button, Image } from 'react-native';
import React from 'react';

function Home({ navigation }) {
  const [count, setCount] = React.useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
        <Text>Hi from Home</Text>
        <Text>Count: {count}</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Settings', {
          itemId: 86,
          otherParam: 'pizza',
        })}
      />
      <Button
          title="Update the title"
          onPress={() => navigation.setOptions({ title: 'Updated!' })}
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
                  options={{ 
                    headerTitle: (props) => <LogoTitle {...props}/>,
                    headerRight: () => (
                      <Button
                        onPress={() => alert('This is a button!')}
                        title="Info"
                        color="#fff"
                      />
                    ),
                  }} />
            </HomeStack.Navigator>
      );
}

export default HomeNavigator;