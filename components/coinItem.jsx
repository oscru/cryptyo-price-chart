import { View, Text, Image, StyleSheet } from "react-native";

const CoinItem = ({ data }) => {
  const { item } = data;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.tinyLogo} source={{ uri: item.image }} />
        <View style={styles.nameContainer}>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
      <Text style={styles.symbol}>${item.current_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    marginHorizontal: 10,
    backgroundColor: "#3C4043",
    flexDirection: "row",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    marginLeft: 15,
  },
  symbol: {
    fontSize: 18,
    fontWeight: "700",
    color: "#E0E0E0",
    textTransform: "uppercase",
  },
  name: {
    fontWeight: "400",
    color: "#92A7AC",
    fontSize: 12,
  },
});

export default CoinItem;
