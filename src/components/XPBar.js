import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { TEXT } from "../constants/typography";

const XPBar = () => {
  const { xp, xpToNextLevel, level } = useSelector((s) => s.phantom);
  const progress = Math.min(1, xp / xpToNextLevel);
  return (
    <View style={styles.container}>
      <Text style={TEXT.body}>Level {level}</Text>

      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={TEXT.body}>
        XP - {xp} / {xpToNextLevel}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: -20,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  barBackground: {
    width: "100%",
    height: 14,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#FFB7D5",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#FF4FA3",
  },
});

export default XPBar;
