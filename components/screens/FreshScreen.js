import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FreshScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Fresh Screen</Text>
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

export default FreshScreen;
