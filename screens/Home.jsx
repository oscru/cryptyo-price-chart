import React, { useState, useEffect } from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import CoinItem from "../components/coinItem";
import CustomButton from "../components/customButton";
import { getActiveChildNavigationOptions } from "react-navigation";
const Home = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [items, setItems] = useState([]);
  const [itemsLimit, setItemsLimit] = useState(6);

  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    hanldeLoadMore();
  }, [coins, itemsLimit]);

  const hanldeLoadMore = () => {
    const coinsArr = [...coins];
    setItems(coinsArr.slice(0, itemsLimit));
  };

  const toggleSetItemsLimit = () => {
    if (itemsLimit === 6) setItemsLimit(20);
    if (itemsLimit === 20) setItemsLimit(6);
  };

  const onPress = (item) => {
    navigation.navigate("CoinDetails", { ...item });
  };

  const getCoins = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
      });
  };

  return (
    <View>
      <FlatList
        data={items}
        style={styles.container}
        renderItem={(item) => (
          <CoinItem data={item} onPress={() => onPress(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
      <CustomButton
        onPress={() => toggleSetItemsLimit()}
        title={itemsLimit === 6 ? "Show more" : "Show less"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 600,
    overflow: "scroll",
  },
});

export default Home;
