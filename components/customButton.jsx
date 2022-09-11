import { Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D33319",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    // elevation: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
