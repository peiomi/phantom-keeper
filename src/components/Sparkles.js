import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

const makeSparkles = (count = 25) =>
  Array.from({ length: count }).map(() => ({
    left: Math.random() * width,
    top: Math.random() * height,
    scale: 0.4 + Math.random() * 1.2,
    delay: Math.random() * 2000,
    duration: 1500 + Math.random() * 1500,
    rotation: Math.random() * 360,
  }));

const Sparkles = () => {
  const particleFX = useSelector((s) => s.settings.particleFX);
  const [sparkles, setSparkles] = useState(makeSparkles(30));
  if (!particleFX) return null;

  return (
    <View pointerEvents="none" style={styles.overlay}>
      {sparkles.map((s, i) => (
        <Animatable.View
          key={i}
          animation={{
            0: { opacity: 0.2, scale: s.scale },
            0.5: { opacity: 1, scale: s.scale * 1.3 },
            1: { opacity: 0.2, scale: s.scale },
          }}
          iterationCount="infinite"
          duration={s.duration}
          delay={s.delay}
          easing="ease-in-out"
          style={[
            styles.sparkleWrapper,
            {
              left: s.left,
              top: s.top,
              transform: [{ rotate: `${s.rotation}deg` }],
            },
          ]}
        >
          <View style={styles.glowCenter} />
          <View style={styles.starVertical} />
          <View style={styles.starHorizontal} />
        </Animatable.View>
      ))}
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
    zIndex: 1,
  },
  sparkleWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  starVertical: {
    position: "absolute",
    width: 1,
    height: 5,
    backgroundColor: "rgba(255, 200, 255, 0.9)",
    borderRadius: 2,
    shadowColor: "#ffd6ff",
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  starHorizontal: {
    position: "absolute",
    width: 4,
    height: 1,
    backgroundColor: "rgba(255, 200, 255, 0.9)",
    borderRadius: 2,
    shadowColor: "#ffd6ff",
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  glowCenter: {
    width: 2,
    height: 2,
    borderRadius: 4,
    backgroundColor: "rgba(255, 220, 255, 1)",
    shadowColor: "#ffd6ff",
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default Sparkles;
