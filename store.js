import { configureStore } from '@reduxjs/toolkit';
import darklightSliceReduce from './feature/darklight/darklightSlice.js';
import translateReducer from './feature/translate/translate.js';
export const store = configureStore({
  reducer: {
    darklight: darklightSliceReduce,
    language: translateReducer,
  },
});
