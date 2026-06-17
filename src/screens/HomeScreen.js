import { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import homeBg from "../assets/backgrounds/homeScreen.png";
import PhantomView from "../components/PhantomView";
import Sparkles from "../components/Sparkles";
import Stats from "../components/Stats";
import XPBar from "../components/XPBar";
import { applyDecay, levelup } from "../redux/phantomSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const animationEnabled = useSelector((s) => s.settings.idleAnimations);

  useEffect(() => {
    dispatch(applyDecay());
    dispatch(levelup());

    const interval = setInterval(() => {
      dispatch(applyDecay());
      dispatch(levelup());
    }, 6000);

    // prevents effect stacking when leaving and returning to screen
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={homeBg}
      style={styles.background}
      resizeMode="cover"
      imageStyle={{ zIndex: 0 }}
    >
      <Sparkles />
      <XPBar />
      <View style={styles.phantomContainer}>
        <PhantomView idle={animationEnabled} />
      </View>
      <View style={styles.statsContainer}>
        <Stats />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  phantomContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  statsContainer: {
    alignItems: "center",
    zIndex: 10,
  },
});

export default HomeScreen;
