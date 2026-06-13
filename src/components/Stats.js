import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { TEXT } from "../constants/typography";
import StatBar from "./StatBar";

const Stats = () => {
  const p = useSelector((s) => s.phantom);

  return (
    <View style={styles.infoCard}>
      <Text style={[styles.name, TEXT.h2]}>
        {p.name} - Lv {p.level}
      </Text>

      <View style={styles.stats}>
        <StatBar
          label="Manifestation"
          value={p.manifestation}
          color="#FF4FA3"
          style={TEXT.statLabel}
        />
        <StatBar
          label="Mischief"
          value={p.mischief}
          color="#D72638"
          style={TEXT.statLabel}
        />
        <StatBar
          label="Essence"
          value={p.essence}
          color="#1A0F1F"
          style={TEXT.statLabel}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    width: 360,
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    marginTop: -40,
  },
  name: {
    fontSize: 24,
    marginTop: 10,
  },
  stats: {
    width: "100%",
    marginTop: 20,
  },
});

export default Stats;
