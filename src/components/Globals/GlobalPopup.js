import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { TEXT } from "../../constants/typography";
import { registerPopup } from "../../utils/popup";

const GlobalPopup = () => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    registerPopup((payload) => {
      setPopup(payload);

      setTimeout(() => setPopup(null), 2000);
    });
  }, []);

  if (!popup) return null;

  return (
    <View style={styles.overlay}>
      <Animatable.View
        animation="fadeInUp"
        duration={400}
        easing="ease-out-back"
        style={styles.popup}
      >
        <Text style={TEXT.h1}>
          {popup.icon} {popup.title}
        </Text>
        <Text style={TEXT.body}>{popup.message}</Text>
      </Animatable.View>
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
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popup: {
    backgroundColor: "rgba(20,0,30,0.9)",
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFB7D5",
    width: "80%",
    alignItems: "center",
  },
});

export default GlobalPopup;
