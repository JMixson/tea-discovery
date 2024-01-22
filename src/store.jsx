import { configureStore } from '@reduxjs/toolkit';
import { teasReducer } from './features/teasSlice';

export const store = configureStore({
  reducer: {
    teas: teasReducer,
  },
});
