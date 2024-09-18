import React from "react";
import { Text, View, StyleSheet } from "react-native";
// import BottomTabNavigation from "../../navigation/BottomNavigation";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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

export default HomeScreen;
