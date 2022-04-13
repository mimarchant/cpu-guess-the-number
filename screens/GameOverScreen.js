import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ rounds, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone took <Text style={styles.highlightedText}>{rounds} </Text>
        Attempts to guess the number
        <Text style={styles.highlightedText}> {userNumber}</Text>.
      </Text>
      <View>
        <PrimaryButton onPress={onStartNewGame}>Play again?</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  highlightedText: {
    color: "red",
  },
});
