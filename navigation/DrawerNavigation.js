// DrawerTabNavigation.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeTabBarNavigation from "../components/widgets/Home/HomeTabBarNavigation";
import BottomTabNavigation from "./BottomNavigation"; // Adjust path if needed

const Drawer = createDrawerNavigator();

const DrawerTabNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#FFF",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#FFF",
        },
        headerTintColor: "#000",
        drawerLabelStyle: {
          color: "#000",
          fontSize: 16,
          fontFamily: "OpenSans-Regular",
        },
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => <Icon name={"home"} size={20} />,
        }}
      >
        {(props) => <HomeTabBarNavigation {...props} initialRoute={0} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="FreshDrawer"
        options={{
          drawerLabel: "Fresh",
          title: "Fresh",
          drawerIcon: () => <Icon name={"schedule"} size={20} />,
        }}
      >
        {(props) => <HomeTabBarNavigation {...props} initialRoute={1} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="TrendingDrawer"
        options={{
          drawerLabel: "Trending",
          title: "Trending",
          drawerIcon: () => <Icon name={"trending-up"} size={20} />,
        }}
      >
        {(props) => <HomeTabBarNavigation {...props} initialRoute={2} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="Topik"
        options={{
          drawerLabel: "Topik",
          title: "Topik",
          drawerIcon: () => <Icon name={"group"} size={20} />,
        }}
        component={BottomTabNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerTabNavigation;
