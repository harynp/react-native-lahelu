import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import CustomButton from "./CustomButton";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomDrawerContent = (props) => {
  const { state, navigation } = props;
  const currentRouteName = state.routeNames[state.index];

  const handleLogin = () => {};

  const renderMenuItem = (routeName, iconName) => (
    <TouchableOpacity
      style={[
        styles.menuItem,
        currentRouteName === routeName && styles.selectedMenuItem,
      ]}
      onPress={() => navigation.navigate(routeName)}
    >
      <View style={styles.iconContainer}>
        <Icon
          name={iconName}
          size={20}
          color={currentRouteName === routeName ? "#fff" : "#525252"}
        />
      </View>
      <Text
        style={[
          styles.menuText,
          currentRouteName === routeName && styles.selectedMenuText,
        ]}
      >
        {routeName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerLogin}>
          <Text style={styles.titleLogin}>Mau ngepost meme kamu sendiri?</Text>
          <Text style={styles.subTitleLogin}>
            Login dengan Google sekarang!
          </Text>
          <CustomButton title="Login" onPress={handleLogin} />
        </View>
      </View>
      <View>
        {renderMenuItem("Home", "home")}
        {renderMenuItem("Fresh", "schedule")}
        {renderMenuItem("Trending", "trending-up")}
        {renderMenuItem("Topik", "group")}
      </View>
      <View style={styles.footer}></View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  containerLogin: {
    borderWidth: 1,
    borderColor: "#525252",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    width: "100%",
  },
  selectedMenuItem: {
    backgroundColor: "#55A4FF",
    paddingVertical: 15,
  },
  iconContainer: {
    paddingLeft: 24,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#525252",
    fontFamily: "OpenSans-Regular",
  },
  selectedMenuText: {
    color: "#fff",
    fontFamily: "OpenSans-Bold",
  },
  titleLogin: {
    fontFamily: "OpenSans-Bold",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 10,
    color: "#525252",
  },
  subTitleLogin: {
    fontFamily: "OpenSans-Regular",
    fontSize: 12,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 20,
    color: "#525252",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});

export default CustomDrawerContent;
