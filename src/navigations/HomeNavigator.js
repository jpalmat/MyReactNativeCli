import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  Text, 
  View, 
  Button, 
  Image, 
  TouchableWithoutFeedback, 
  Alert,
  Platform,
  Dimensions
 } from 'react-native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

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
        onPress={() => navigation.navigate('Details', {
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

  function Details({ route, navigation}) {
    console.log(useDeviceOrientation())
    const { landscape } = useDeviceOrientation();
    const { itemId, otherParam } = route.params;
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
        <View>
          {/* <Text onPress={() => alert('test')}>Hi from details</Text> */}
          <Text onPress={() => Alert.alert("My title", "My message", [
            {text: "Yes", onPress: () => alert('yes was clicked')},
            {text: "No", onPress: () => alert('no was clicked')}
          ])}>Hi from details</Text>
          {/* only ios */}
          {/* <Text onPress={() => Alert.prompt("My title", "My message", text => alert(text))}>Hi from details1</Text> */}
          {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
                  <TouchableWithoutFeedback onPress={() => alert(Dimensions.get('screen'))}>
                  {/* <TouchableOpacity> */}
                      <Image 
                      source={{
                          width: 200,
                          height: 300,
                          uri: "https://picsum.photos/200/300"
                      }}
                      />
                  </TouchableWithoutFeedback>
                  {/* </TouchableOpacity> */}
        </View>
        <View style={{
          backgroundColor: "blue",
          width: landscape ? "10%" : "50%",
          height: landscape ? "100%" : "30%"
        }}>
          <Button 
            title="Go to next"
            onPress={() => navigation.navigate("Flexscreen")}/>
        </View>
      </SafeAreaView>
    );
  }

  function Flexscreen() {
    return (
      <View>
        <Text>test</Text>
      </View>
    )
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
                  name="Details" 
                  component={Details} 
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
                <HomeStack.Screen 
                  name="Flexscreen"
                  component={Flexscreen}/>
            </HomeStack.Navigator>
      );
}

export default HomeNavigator;