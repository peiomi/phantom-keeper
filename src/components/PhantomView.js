import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { moodImages } from "../constants/moodImages";

const PhantomView = () => {
  const p = useSelector((s) => s.phantom);

  return (
    <View style={styles.container}>
      <View style={styles.ghostWrapper}>
        <Animatable.Image
          source={moodImages[p.mood] || moodImages.default}
          animation="pulse"
          iterationCount="infinite"
          duration={2000}
          style={styles.ghost}
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
