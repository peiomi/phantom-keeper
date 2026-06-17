import { useFonts } from "expo-font";
import { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import AppNavigator from "../navigation/AppNavigator";
import { setupNotifications } from "../utils/notifications";
import GlobalEssenceWarning from "./Globals/GlobalEssenceWarning";
import GlobalMischiefEvent from "./Globals/GlobalMischiefEvent";
import GlobalPopup from "./Globals/GlobalPopup";
import LevelUpListener from "./Globals/LevelUpListener";
import NamePhantomModal from "./NamePhantomModal";

const Main = () => {
  const phantomName = useSelector((s) => s.phantom.name);
  const [loaded] = useFonts({
    Cinzel: require("../../assets/fonts/CinzelDecorative-Bold.ttf"),
    Cormorant: require("../../assets/fonts/CormorantGaramond-Regular.ttf"),
    Montserrat: require("../../assets/fonts/MontserratAlternates-Medium.ttf"),
    Unifraktur: require("../../assets/fonts/UnifrakturCook-Bold.ttf"),
  });
  console.log("fonts loaded:", loaded);

  useEffect(() => {
    setupNotifications();
  }, []);

  if (!loaded) return null;

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <NamePhantomModal visible={phantomName === ""} />
      {!loaded && <View style={{ flex: 1, backgroundColor: "black" }} />}
      <AppNavigator />
      <GlobalMischiefEvent />
      <GlobalPopup />
      <GlobalEssenceWarning />
      <LevelUpListener />
    </View>
  );
};

export default Main;
