import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import levelUpSFX from "../../../assets/sfx/levelUp.mp3";
import { triggerPopup } from "../../utils/popup";
import { playSFX } from "../../utils/sound";

const LevelUpListener = () => {
  const level = useSelector((s) => s.phantom.level);
  const soundEnabled = useSelector((s) => s.settings.soundFX);

  const prevLevel = useRef(level);

  useEffect(() => {
    if (level > prevLevel.current) {
      playSFX(levelUpSFX, soundEnabled);

      triggerPopup({
        title: "Level Up!",
        message: `Wisp reached level ${level}!`,
        icon: "★",
      });
    }
    console.log("Level changed:", prevLevel.current, "→", level);
    prevLevel.current = level;
  }, [level]);

  return null;
};

export default LevelUpListener;
