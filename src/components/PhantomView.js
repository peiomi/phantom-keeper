import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { moodImages } from "../constants/moodImages";

const PhantomView = ({ idle }) => {
  const p = useSelector((s) => s.phantom);
  const opacity = Math.max(0.1, Math.min(1, p.manifestation / 100));

  return (
    <View style={styles.container}>
      <View style={styles.ghostWrapper}>
        <Animatable.Image
          source={moodImages[p.mood] || moodImages.default}
          animation={idle ? "pulse" : undefined}
          iterationCount={idle ? "infinite" : 1}
          duration={idle ? 2000 : 0}
          style={[styles.ghost, { opacity }]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  ghostWrapper: {
    width: "100%",
    height: 380,
    justifyContent: "center",
    alignItems: "center",
  },
  ghost: {
    width: "75%",
    aspectRatio: 1,
    maxHeight: 280,
  },
});

export default PhantomView;
