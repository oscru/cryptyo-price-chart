import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  useWindowDimensions,
} from "react-native";
import { StateContext } from "./consumer";
import { CommonActions } from "@react-navigation/native";

const Img = require("../assets/javaScript.png");

const FlatListItem = ({ content, navigation }) => {
  const { width } = useWindowDimensions();
  // const [state, setState] = useContext(StateContext);
  // console.log(props)

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={Img}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.description}>{content.description}</Text>
        {content.id === 3 && (
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: "Home" }],
                })
              )
            }
          />
        )}
      </View>
    </View>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#493d8a",
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
