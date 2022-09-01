import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
// import { NativeBaseProvider, Text, Box, Button, Switch } from "native-base";
import OnBoarding from "./components/onBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";

const AppStack = createNativeStackNavigator();

export default function App() {
  const [onboarded, setOnboarded] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const onboarded = await AsyncStorage.getItem("ONBOARDED");
      setOnboarded(JSON.parse(onboarded));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator
          initialRouteName={onboarded ? "Home" : "OnBoarding"}
        >
          <AppStack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
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
