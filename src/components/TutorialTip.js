import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Tooltip } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { TEXT } from "../constants/typography";
import { tutorialSteps } from "../utils/tutorialSteps";

// this tooltip is just a placeholder while i try to figure out how to do
// a full on walkthrough tutorial with tooltips

const TutorialTip = ({ children, id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const phantomName = useSelector((s) => s.phantom.name);

  /*  const step = useSelector((s) => s.tutorial.step);
  const seen = useSelector((s) => s.tutorial.seen);
  if (seen) return children; */

  const stepObj = tutorialSteps.find((s) => s.id === id);
  const text =
    typeof stepObj?.text === "function"
      ? stepObj.text(phantomName)
      : stepObj?.text;

  return (
    <Tooltip
      containerStyle={styles.tooltipBox}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      popover={<Text style={[TEXT.body, { fontSize: 12 }]}>{text}</Text>}
      pointerStyle={styles.pointer}
      overlayColor="rgba(0, 0, 0, 0.6)"
      pointerColor="#1a001f"
      placement="top"
    >
      {children}
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  pointer: {
    borderTopColor: "#FF4FA3",
  },
  tooltipBox: {
    backgroundColor: "#1a001f",
    borderColor: "#FF4FA3",
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    width: "auto",
  },
});

export default TutorialTip;
