import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.ListItem}>
      <Text># {roundNumber}</Text>
      <Text>Cpu's guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  ListItem: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
