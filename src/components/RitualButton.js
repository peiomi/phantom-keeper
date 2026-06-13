import { Pressable, StyleSheet, Text } from "react-native";

const RitualButton = ({ label, icon, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.ritualButton,
        pressed && { transform: [{ scale: 0.96 }] },
      ]}
    >
      <Text style={styles.ritualIcon}>{icon}</Text>
      <Text style={styles.ritualLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ritualButton: {
    width: "50%",
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderWidth: 2,
    borderColor: "rgba(255, 183, 213, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FF77D9",
    shadowRadius: 8,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 0 },
  },
  ritualIcon: {
    fontSize: 32,
    color: "#FF4FA3",
    textShadowColor: "#FF77D6",
    textShadowRadius: 8,
  },
  ritualLabel: {
    fontSize: 18,
    fontFamily: "Cinzel",
    color: "#FFB7D5",
    marginTop: 6,
  },
});

export default RitualButton;
