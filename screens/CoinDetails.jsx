import { View, Text, StyleSheet } from "react-native";

const CoinDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.symbol}>{item.symbol} </Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Text style={styles.price}>${item.current_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    marginBottom: 1,
  },
  symbol: {
    fontSize: 32,
    textTransform: "uppercase",
  },
  name: {
    fontSize: 32,
    flexWrap: "wrap",
    maxWidth:"100%"
  },
  price: {
    fontSize: 32,
  },
});

export default CoinDetails;
