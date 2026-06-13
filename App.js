import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./src/navigation/AppNavigator";
import { persistor, store } from "./src/redux/store";
import { setupNotifications } from "./src/utils/notifications";

export default function App() {
  const [loaded] = useFonts({
    Cinzel: require("./assets/fonts/CinzelDecorative-Bold.ttf"),
    Cormorant: require("./assets/fonts/CormorantGaramond-Regular.ttf"),
    Montserrat: require("./assets/fonts/MontserratAlternates-Medium.ttf"),
    Unifraktur: require("./assets/fonts/UnifrakturCook-Bold.ttf"),
  });
  console.log("fonts loaded:", loaded);

  useEffect(() => {
    setupNotifications();
  }, []);

  if (!loaded) return <></>;

  return (
    <Provider store={store}>
      <PersistGate loading={<></>} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
