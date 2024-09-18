import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TopikScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Topik Screen</Text>
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

export default TopikScreen;
