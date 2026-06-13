import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, StyleSheet, Switch, Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import settingsBg from "../assets/backgrounds/settingsScreen.png";
import { TEXT } from "../constants/typography";

const SettingsScreen = () => {
  const [mischiefEvents, setMischiefEvents] = useState(true);
  const [idleAnimations, setIdleAnimations] = useState(true);
  const [particleFX, setParticleFX] = useState(true);
  const [soundFX, setSoundFX] = useState(true);

  return (
    <ImageBackground source={settingsBg} style={{ flex: 1 }} resizeMode="cover">
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
              value={mischiefEvents}
              onValueChange={setMischiefEvents}
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>

          <View style={styles.row}>
            <Text style={TEXT.body}>Idle Animations</Text>
            <Switch
              value={idleAnimations}
              onValueChange={setIdleAnimations}
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>

          <Text style={TEXT.h2}>Visuals</Text>
          <View style={styles.row}>
            <Text style={TEXT.body}>Particle Effects</Text>
            <Switch
              value={particleFX}
              onValueChange={setParticleFX}
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>

          <Text style={TEXT.h2}>Audio</Text>
          <View style={styles.row}>
            <Text style={TEXT.body}>Sound Effects</Text>
            <Switch
              value={soundFX}
              onValueChange={setSoundFX}
              thumbColor="#FF4FA3"
              trackColor={{ true: "#FF77D9", false: "#555" }}
            />
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
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
});

export default SettingsScreen;
