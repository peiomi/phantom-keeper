import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import ritualsBg from "../assets/backgrounds/ritualsScreen.png";
import PhantomView from "../components/PhantomView";
import RitualButton from "../components/RitualButton";
import RitualPopup from "../components/RitualPopup";
import {
  banish,
  channel,
  commune,
  levelup,
  tease,
} from "../redux/phantomSlice";

const RitualsScreen = () => {
  const [ritualPopup, setRitualPopup] = useState(null);
  const dispatch = useDispatch();

  const act = (action, title, msg, icon) => {
    dispatch(action());
    dispatch(levelup());

    setRitualPopup({
      title,
      message: msg,
      icon: icon,
    });
  };

  return (
    <ImageBackground source={ritualsBg} style={{ flex: 1 }} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.phantomContainer}>
          <PhantomView />
        </View>
        <View style={styles.ritualGrid}>
          <RitualButton
            label="Channel"
            icon="✧"
            onPress={() => act(channel, "Channel", "You strengthed Wisp!", "✧")}
          />
          <RitualButton
            label="Tease"
            icon="♡"
            onPress={() => act(tease, "Tease", "Wisp giggles eerily", "♡")}
          />
          <RitualButton
            label="Banish"
            icon="✖"
            onPress={() => act(banish, "Banish", "Wisp recoils in anger", "✖")}
          />
          <RitualButton
            label="Commune"
            icon="☾"
            onPress={() =>
              act(commune, "Commune", "A calm presence fills the room", "☾")
            }
          />
        </View>
      </View>
      <RitualPopup
        visible={!!ritualPopup}
        title={ritualPopup?.title}
        message={ritualPopup?.message}
        icon={ritualPopup?.icon}
        onClose={() => setRitualPopup(null)}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ritualGrid: {
    width: "100%",
    marginTop: -20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  phantomContainer: {
    marginTop: 50,
  },
});

export default RitualsScreen;
