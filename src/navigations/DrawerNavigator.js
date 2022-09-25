import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import React from "react";

function CreateContacts() {
  return (
    <View>
      <Text>Hi from creat contacts</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator useLegacyImplementation>
          <Drawer.Screen name="Home" component={CreateContacts} />
          </Drawer.Navigator>
      );
}

export default DrawerNavigator;