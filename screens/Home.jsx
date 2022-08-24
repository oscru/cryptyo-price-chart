import { View, Text } from "react-native";
import { CommonActions } from "@react-navigation/native";

import React from "react";

const Home = ({ navigation }) => {
/*   navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: "Home" }],
    })
  ); */

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
