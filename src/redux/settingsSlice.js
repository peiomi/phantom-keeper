import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mischiefEvents: true,
  idleAnimations: true,
  particleFX: true,
  soundFX: true,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSetting: (state, action) => {
      const key = action.payload;
      state[key] = !state[key];
    },
    setSetting: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { toggleSetting, setSetting } = settingsSlice.actions;
export default settingsSlice.reducer;
