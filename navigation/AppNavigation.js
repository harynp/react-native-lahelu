import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerTabNavigation from "./DrawerNavigation";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerTabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
