import { createSlice } from "@reduxjs/toolkit";

// so stats stay between 0 - 100
const clamp = (v, min = 0, max = 100) => Math.min(max, Math.max(min, v));

const initialState = {
  name: "",
  manifestation: 80, // visibility
  mischief: 20, // how chaotic it feels
  essence: 50, // energy
  mood: "playful",
  level: 1,
  xp: 0,
  xpToNextLevel: 50,
  lastUpdated: Date.now(),
};

const phantomSlice = createSlice({
  name: "phantom",
  initialState,
  reducers: {
    applyDecay(state, action) {
      const now = action.payload || Date.now();
      const minutes = (now - state.lastUpdated) / 60000;
      if (minutes <= 0) return;

      let essenceDecay = 0.4;
      let mischiefGain = 0.8;
      let manifestationDecay = 0.6;

      if (state.mood === "serene") {
        essenceDecay = 0.2;
        mischiefGain = 0.4;
      }

      if (state.mood === "restless") {
        essenceDecay = 0.8;
        mischiefGain = 1.2;
      }

      if (state.mood === "chaotic") {
        essenceDecay = 1.4;
        mischiefGain = 2.0;
      }

      if (state.mood === "faint") {
        essenceDecay = 2.0;
        manifestationDecay = 1.2;
      }

      state.essence = clamp(state.essence - minutes * essenceDecay);
      state.mischief = clamp(state.mischief + minutes * mischiefGain);
      state.manifestation = clamp(
        state.manifestation - minutes * manifestationDecay,
      );

      if (state.manifestation < 20) state.mood = "faint";
      else if (state.mischief > 75) state.mood = "chaotic";
      else if (state.mischief > 50) state.mood = "restless";
      else if (state.essence > 70) state.mood = "serene";
      else state.mood = "playful";

      state.lastUpdated = now;
    },
    channel(state) {
      // strengthens ghost's manifestation
      // reduces essence
      state.manifestation = clamp(state.manifestation + 25);
      state.essence = clamp(state.essence - 10);
      state.xp += 5;
    },
    tease(state) {
      // reduces mischief & essence
      state.mischief = clamp(state.mischief - 20);
      state.essence = clamp(state.essence - 5);
      state.mood = "playful";
      state.xp += 8;
    },
    banish(state) {
      // forces mischief level down but makes it mad at you
      // reduces essence/ mischief/ manifestation
      state.mischief = clamp(state.mischief - 40);
      state.manifestation = clamp(state.manifestation - 10);
      state.essence = clamp(state.essence - 20);
      state.mood = "spiteful";
      state.xp += 4;
    },
    commune(state) {
      // calming ritual, boosts essence
      state.essence = clamp(state.essence + 30);
      state.mood = "serene";
      state.xp += 6;
    },
    levelup(state) {
      const reqXP = state.level * 50;
      if (state.xp >= reqXP) {
        state.level += 1;
        state.xp -= reqXP;
        state.xpToNextLevel = state.level * 50;
        // level up bonus
        state.manifestation = clamp(state.manifestation + 10);
        state.essence = clamp(state.essence + 5);
      }
    },
    resetPhantom(state) {
      return {
        ...initialState,
        lastUpdated: Date.now(),
      };
    },
    setPhantomName(state, action) {
      state.name = action.payload;
    },
    // just for testing mischief event
    mischiefTrigger(state) {
      state.mischief = 80;
    },
  },
});

export const {
  applyDecay,
  channel,
  tease,
  banish,
  commune,
  levelup,
  resetPhantom,
  mischiefTrigger,
  setPhantomName,
} = phantomSlice.actions;

export default phantomSlice.reducer;
