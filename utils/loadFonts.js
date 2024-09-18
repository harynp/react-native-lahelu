import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const loadFonts = async () => {
  try {
    await Font.loadAsync({
      "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
      "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    });
  } catch (error) {
    console.error("Error loading fonts:", error);
  } finally {
    SplashScreen.hideAsync();
  }
};
