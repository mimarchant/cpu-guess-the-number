import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 5,
    overflow: "hidden",
  },
  innerContainer: {
    alignItems: "center",
    width: 150,
    borderRadius: 16,
    backgroundColor: "#0BB5E7",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
