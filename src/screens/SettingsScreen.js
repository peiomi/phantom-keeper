import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import settingsBg from "../assets/backgrounds/settingsScreen.png";
import Sparkles from "../components/Sparkles";
import { TEXT } from "../constants/typography";
import { resetPhantom, setPhantomName } from "../redux/phantomSlice";
import { setSetting } from "../redux/settingsSlice";
import { setTutorialSeen, setTutorialStep } from "../redux/tutorialSlice";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const settings = useSelector((s) => s.settings);

  return (
    <ImageBackground source={settingsBg} style={{ flex: 1 }} resizeMode="cover">
      <Sparkles />
      <StatusBar style="light" translucent={true} />

      <View style={styles.overlay}>
        <Animated.View
          entering={FadeInDown.duration(600)}
          style={styles.header}
        >
          <Text style={TEXT.h1}>Settings</Text>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(200)} style={styles.panel}>
          <Text style={TEXT.h2}>Gameplay</Text>
          <View style={styles.row}>
            <Text style={TEXT.body}>Mischief Events</Text>
            <Switch
              value={settings.mischiefEvents}
              onValueChange={(v) =>
                dispatch(setSetting({ key: "mischiefEvents", value: v }))
              }
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>

          <View style={styles.row}>
            <Text style={TEXT.body}>Idle Animations</Text>
            <Switch
              value={settings.idleAnimations}
              onValueChange={(v) =>
                dispatch(setSetting({ key: "idleAnimations", value: v }))
              }
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>

          <Text style={TEXT.h2}>Visuals</Text>
          <View style={styles.row}>
            <Text style={TEXT.body}>Particle Effects</Text>
            <Switch
              value={settings.particleFX}
              onValueChange={(v) =>
                dispatch(setSetting({ key: "particleFX", value: v }))
              }
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>

          <Text style={TEXT.h2}>Audio</Text>
          <View style={styles.row}>
            <Text style={TEXT.body}>Sound Effects</Text>
            <Switch
              value={settings.soundFX}
              onValueChange={(v) =>
                dispatch(setSetting({ key: "soundFX", value: v }))
              }
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>

          <Text style={TEXT.h2}>System</Text>
          <View style={styles.row}>
            <Text style={TEXT.body}>Reset Phantom</Text>
            <Pressable
              style={styles.resetButton}
              onPress={() => {
                Alert.alert(
                  "Are you sure?",
                  "This will return Wisp to level 1 and erase all progress.",
                  [
                    { text: "Cancel", style: "cancel" },
                    {
                      text: "Yes, Reset",
                      style: "destructive",
                      onPress: async () => {
                        await AsyncStorage.clear();
                        dispatch(resetPhantom());
                        dispatch(setTutorialSeen(false));
                        dispatch(setTutorialStep(0));
                      },
                    },
                  ],
                );
              }}
            >
              <Text style={TEXT.body}>Reset</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Text style={TEXT.body}>Rename Phantom</Text>
            <Pressable
              style={styles.resetButton}
              onPress={() => dispatch(setPhantomName(""))}
            >
              <Text style={TEXT.body}>Rename</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    zIndex: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  panel: {
    backgroundColor: "rgba(20,0,30,0.7)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "#FFB7D5",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  resetButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF4FA3",
  },
});

export default SettingsScreen;
