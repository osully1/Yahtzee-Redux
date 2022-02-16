import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {value: 1, selected: false, img: 'die1.svg'}, {value: 2, selected: false, img: 'die2.svg'}, {value: 3, selected: false, img: 'die3.svg'}, {value: 4, selected: false, img: 'die4.svg'}, {value: 5, selected: false, img: 'die5.svg'}
];

export const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers: {
      rollDice: (state) => {
        state.forEach(die => {
            if (die.selected === false) {
                die.value = Math.floor(Math.random() * 6 + 1)
                die.img = `die${die.value}.svg`
            }
        })
      }
    }
  });

  export const { rollDice } = diceSlice.actions;

  export const selectDice = (state) => state.dice;

  export default diceSlice.reducer;