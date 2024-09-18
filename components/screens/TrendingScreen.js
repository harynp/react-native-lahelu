import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TrendingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Trending Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TrendingScreen;
