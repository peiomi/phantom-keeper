import { Audio } from "expo-av";

export const playSFX = async (file, soundEnabled) => {
  if (!soundEnabled) return;

  const { sound } = await Audio.Sound.createAsync(file);
  await sound.playAsync();
};
