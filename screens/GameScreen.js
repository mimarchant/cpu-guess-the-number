import { useState, useEffect } from "react";
import Title from "../components/Title";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import GuessLogItem from "../components/GuessLogItem";

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessRoundsListLength = guessRounds.length;

  let minBoundary = 1;
  let maxBoundary = 100;

  function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  const handleNextGuess = (string) => {
    if (
      (string === "lower" && currentGuess < userNumber) ||
      (string === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("don't lie!!", "Lying is not okay", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (string === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((previousGuessRounds) => [
      newRandomNumber,
      ...previousGuessRounds,
    ]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Oponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Title>Higher or lower?</Title>
        <View style={styles.buttons}>
          <PrimaryButton onPress={() => handleNextGuess("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => handleNextGuess("higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttons: {
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
  },
});
