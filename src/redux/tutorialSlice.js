import { createSlice } from "@reduxjs/toolkit";

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState: {
    step: 0,
    seen: false,
    currentScreen: "Home",
  },
  reducers: {
    setTutorialStep: (state, action) => {
      state.step = action.payload;
    },
    nextTutorialStep: (state) => {
      state.step += 1;
    },
    setTutorialSeen: (state, action) => {
      state.seen = action.payload;
    },
    setCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
    resetTutorial: (state) => {
      state.step = 0;
      state.seen = false;
    },
  },
});

export const {
  setTutorialStep,
  nextTutorialStep,
  setTutorialSeen,
  setCurrentScreen,
  resetTutorial,
} = tutorialSlice.actions;

export default tutorialSlice.reducer;
