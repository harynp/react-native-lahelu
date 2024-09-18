import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../../screens/HomeScreen";
import FreshScreen from "../../screens/FreshScreen";
import TrendingScreen from "../../screens/TrendingScreen";

const Tab = createMaterialTopTabNavigator();

const HomeTabBarNavigation = ({ initialRoute }) => {
  const getInitialRouteName = () => {
    switch (initialRoute) {
      case 0:
        return "Home";
      case 1:
        return "Fresh";
      case 2:
        return "Trending";
    }
  };

  return (
    <Tab.Navigator
      initialRouteName={getInitialRouteName()}
      screenOptions={{
        tabBarStyle: { backgroundColor: "#FFF" },
        tabBarLabelStyle: { fontSize: 12, color: "#000" },
        tabBarIndicatorStyle: { backgroundColor: "#55A4FF" },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fresh" component={FreshScreen} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabBarNavigation;
