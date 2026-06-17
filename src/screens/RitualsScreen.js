import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ritualButtonSFX from "../../assets/sfx/ritualButton.mp3";
import ritualsBg from "../assets/backgrounds/ritualsScreen.png";
import PhantomView from "../components/PhantomView";
import RitualButton from "../components/RitualButton";
import RitualPopup from "../components/RitualPopup";
import Sparkles from "../components/Sparkles";
import { TEXT } from "../constants/typography";
import {
  banish,
  channel,
  commune,
  levelup,
  tease,
} from "../redux/phantomSlice";
import { playSFX } from "../utils/sound";

const RitualsScreen = () => {
  const [ritualPopup, setRitualPopup] = useState(null);
  const dispatch = useDispatch();
  const soundEnabled = useSelector((s) => s.settings.soundFX);
  const animationEnabled = useSelector((s) => s.settings.idleAnimations);
  const phantomName = useSelector((s) => s.phantom.name);

  const act = (action, title, msg, icon) => {
    playSFX(ritualButtonSFX, soundEnabled);
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
      <Sparkles idle={animationEnabled} />
      <View style={styles.container}>
        <View style={styles.phantomContainer}>
          <PhantomView idle={animationEnabled} />
        </View>
        <View style={styles.ritualGrid}>
          <RitualButton
            label="Channel"
            icon="✧"
            onPress={() =>
              act(
                channel,
                "Channel",
                `You strengthened ${phantomName}'s manifestation!`,
                "✧",
              )
            }
          />

          <RitualButton
            label="Tease"
            icon="♡"
            onPress={() =>
              act(
                tease,
                "Tease",
                `${phantomName} giggles eerily, you reduced ${phantomName}'s mischief. `,
                "♡",
              )
            }
          />

          <RitualButton
            label="Banish"
            icon="✖"
            onPress={() =>
              act(
                banish,
                "Banish",
                `You disciplined ${phantomName}, mischief is down and ${phantomName} recoils in anger.`,
                "✖",
              )
            }
          />

          <RitualButton
            label="Commune"
            icon="☾"
            onPress={() =>
              act(
                commune,
                "Commune",
                `A calm presence fills the room, you restored ${phantomName}'s essence.`,
                "☾",
              )
            }
          />
        </View>
      </View>
      <RitualPopup
        // fixes "Cannot read property of null"
        visible={!!ritualPopup} // forces into strict boolean, object true null false
        title={ritualPopup?.title} // if not null pass the prop
        message={ritualPopup?.message}
        icon={ritualPopup?.icon}
        onClose={() => setRitualPopup(null)}
      />
      <View style={styles.textContainer}>
        <Text
          style={[TEXT.body, { fontSize: 14 }]}
        >{`✧ Use rituals to calm, empower, play with or discipline ${phantomName} ✧`}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
  ritualGrid: {
    width: "100%",
    marginTop: -30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  phantomContainer: {
    marginTop: 50,
  },
  textContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    borderColor: "rgba(255, 183, 213, 0.6)",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
});

export default RitualsScreen;
