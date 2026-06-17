import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { TEXT } from "../constants/typography";
import StatBar from "./StatBar";
import TutorialTip from "./TutorialTip";

const Stats = () => {
  const p = useSelector((s) => s.phantom);

  return (
    <View style={styles.infoCard}>
      <Text style={[styles.name, TEXT.h2]}>{p.name}'s Stats</Text>
      <Text style={[TEXT.h2, { fontSize: 20 }]}>Mood: {p.mood}</Text>
      <View style={styles.stats}>
        <TutorialTip id="manifestation_1">
          <StatBar
            label="Manifestation"
            value={p.manifestation}
            color="#FF4FA3"
            style={TEXT.statLabel}
          />
        </TutorialTip>

        <TutorialTip id="mischief">
          <StatBar
            label="Mischief"
            value={p.mischief}
            color="#D72638"
            style={TEXT.statLabel}
          />
        </TutorialTip>

        <TutorialTip id="essence_1">
          <StatBar
            label="Essence"
            value={p.essence}
            color="#1A0F1F"
            style={TEXT.statLabel}
          />
        </TutorialTip>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    width: 360,
    padding: 20,
    margin: -50,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    marginTop: 3,
  },
  stats: {
    width: "100%",
    marginTop: 3,
  },
});

export default Stats;
