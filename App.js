import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Text, StatusBar } from "react-native";
import { store, persistor } from "./redux/store";

import AppNavigation from "./AppNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
