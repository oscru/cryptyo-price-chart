import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import FlatListComponent from "./flatListComponent";

const OnBoarding = ({ navigation }) => {
  // console.log(navigation);
  return (
    <View style={styles.container}>
      <FlatListComponent navigation={navigation} />
      {/* <Button
        title="Press me"
        color="#f194ff"
        onPress={() => navigation.push("Home")}
      /> */}
    </View>
  );
};
export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
