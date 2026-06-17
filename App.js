import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./src/components/MainComponent";
import { persistor, store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<></>} persistor={persistor}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
