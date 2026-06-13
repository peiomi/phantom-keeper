import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from "react-native-reanimated";

const RitualPopup = ({ visible, title, message, icon = "✧", onClose }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 250 });
      scale.value = withSpring(1, { damping: 12 });
    } else {
      opacity.value = withTiming(0, { duration: 200 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Animated.Text style={styles.icon}>{icon}</Animated.Text>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.button}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  card: {
    width: "80%",
    padding: 26,
    borderRadius: 22,
    backgroundColor: "rgba(25,0,30,0.95)",
    borderWidth: 2,
    borderColor: "#FF4FA3",
    shadowColor: "#FF4FA3",
    shadowOpacity: 0.6,
    shadowRadius: 12,
    alignItems: "center",
  },
  icon: {
    fontSize: 52,
    color: "#FF77D9",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: "Cinzel",
    color: "#FFB7D5",
    marginBottom: 6,
  },
  message: {
    fontSize: 16,
    fontFamily: "Cinzel",
    color: "#FFD9EC",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    fontSize: 18,
    fontFamily: "Cinzel",
    color: "#FF4FA3",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});

export default RitualPopup;
