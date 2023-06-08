import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isDark: false,
};
const darklightSlice = createSlice({
  name: "darklight",
  initialState: initialState,
  reducers: {
    openDark: (state, action) => {
      state.isDark = true;
      console.log(action);
    },
    closeDark: (state, action) => {
      state.isDark = false;
    },
  },
});
console.log(darklightSlice);
export const { openDark, closeDark } = darklightSlice.actions;

export default darklightSlice.reducer;
