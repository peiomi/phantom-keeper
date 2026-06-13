import { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import homeBg from "../assets/backgrounds/homeScreen.png";
import PhantomView from "../components/PhantomView";
import Stats from "../components/Stats";
import { applyDecay, levelup } from "../redux/phantomSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

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
    >
      <View style={styles.phantomContainer}>
        <PhantomView />
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
  },
  phantomContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    elevation: 10,
    paddingTop: 60,
  },
  statsContainer: {
    alignItems: "center",
  },
});

export default HomeScreen;
