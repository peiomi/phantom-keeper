import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { triggerPopup } from "../../utils/popup";

const GlobalEssenceWarning = () => {
  const essence = useSelector((s) => s.phantom.essence);
  const prevEssence = useRef(essence);

  const threshold = 20;

  useEffect(() => {
    if (prevEssence.current > threshold && essence <= threshold) {
      triggerPopup({
        title: "Low Essence!",
        message: "Wisp is fading...restore essence soon.",
        icon: "⚠️",
      });
    }
    prevEssence.current = essence;
  }, [essence]);

  return null;
};

export default GlobalEssenceWarning;
