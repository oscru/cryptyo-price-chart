import React from "react";
import { StyleSheet, View } from "react-native";
// import { NativeBaseProvider, Text, Box, Button, Switch } from "native-base";
import OnBoarding from "./components/onBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="OnBoarding">
          <AppStack.Screen name="OnBoarding" component={OnBoarding} />
          <AppStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
