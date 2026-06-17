import { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { moodImages } from "../../constants/moodImages";
import { playSFX } from "../../utils/sound";

const { width, height } = Dimensions.get("window");

const jumpscareAnimation = {
  0: { scale: 0.6, opacity: 0 },
  0.2: { scale: 1.2, opacity: 1 },
  0.4: { scale: 0.9, opacity: 1 },
  1: { scale: 1.3, opacity: 1 },
};

const GlobalMischiefEvent = () => {
  const mischief = useSelector((s) => s.phantom.mischief);
  const mischiefEventsEnabled = useSelector((s) => s.settings.mischiefEvents);
  const soundEnabled = useSelector((s) => s.settings.soundFX);
  const [active, setActive] = useState(false);
  const cooldownRef = useRef(false);
  const playingRef = useRef(false);
  const prevMischief = useRef(0);

  const playJumpscareSound = async () => {
    playSFX(require("../../../assets/sfx/jumpscare.mp3"), soundEnabled);
  };

  useEffect(() => {
    if (!mischiefEventsEnabled) return;

    // stopped the looping audio/animation
    const crossedThreshold = prevMischief.current < 80 && mischief >= 80;
    if (crossedThreshold && !cooldownRef.current && !playingRef.current) {
      cooldownRef.current = true;
      playingRef.current = true;
      setActive(true);
      playJumpscareSound();

      setTimeout(() => {
        setActive(false);
        playingRef.current = false;
      }, 1200);

      setTimeout(() => {
        cooldownRef.current = false;
      }, 5000);
    }
    prevMischief.current = mischief;
  }, [mischief]);

  if (!active) return null;

  return (
    <View style={styles.overlay} pointerEvents="none">
      <Animatable.Image
        source={moodImages["chaotic"]}
        animation={jumpscareAnimation}
        duration={400}
        style={styles.ghost}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: "transparent",
  },
  ghost: {
    width: width * 0.9,
    height: width * 0.9,
    resizeMode: "contain",
  },
});

export default GlobalMischiefEvent;
