import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#aa076b",
    padding: 24,
    borderRadius: 16,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#aa076b",
    fontSize: 24,
    fontWeight: "bold",
  },
});
