import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getActiveChildNavigationOptions } from "react-navigation";
const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoins(data);
      });
  };

  const renderItem = ({item}) =>{
    return(<Text>{item.name}</Text>)
  }

  return (
    <View>
      <FlatList
        data={coins}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
