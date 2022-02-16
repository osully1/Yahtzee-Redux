import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playDice: []
};

export const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers: {
      rollDice: (state) => {
        state.playDice.forEach(die => {
            if (die.selected === false) {
                die.value = Math.floor(Math.random() * 6 + 1)
                die.img = `die${die.value}.svg`
            }
        })
      },
      setInitialDice: (state, action) => {
        state.playDice = action.payload
      }
    }
  });

  export const { rollDice, setInitialDice } = diceSlice.actions;

  export const selectPlayDice = (state) => state.dice.playDice;

  export default diceSlice.reducer;