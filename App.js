// App.js
import React, { useState, useEffect } from "react";
import { loadFonts } from "./utils/loadFonts";
import AppNavigation from "./navigation/AppNavigation";

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const init = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    init();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigation />;
};

export default App;
