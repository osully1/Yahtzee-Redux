import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../store/countSlice';
import diceReducer from '../store/diceSlice';
import scoreReducer from '../store/scoreSlice'

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    count: countReducer,
    score: scoreReducer,
  },
});