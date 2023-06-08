import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isEnglish: false,
};
const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    transEN: (state, action) => {
      state.isEnglish = true;
    },
    transVI: (state, action) => {
      state.isEnglish = false;
    },
  },
});
console.log(languageSlice);
export const { transEN, transVI } = languageSlice.actions;

export default languageSlice.reducer;
