import { react, useState, useRef } from "react";
import { Text, View, FlatList, Animated } from "react-native";
import FlatListItem from "./faltListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";

const FlatListComponent = ({ navigation }) => {
  const onPressFinish = async () => {
    await AsyncStorage.setItem("ONBOARDED", "true");
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }],
      })
    );
  };

  const [currenIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const data = [
    {
      id: 1,
      title: "First Item",
      description: "This is the first item",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item",
    },
  ];

  return (
    <View style={{ flex: 3 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FlatListItem
            content={item}
            navigation={navigation}
            onPressFinish={() => onPressFinish()}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
    </View>
  );
};

export default FlatListComponent;
