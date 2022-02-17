import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playDice: []
};

export const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers: {
        setInitialDice: (state, action) => {
            state.playDice = action.payload
        },
        rollDice: (state) => {
            state.playDice.forEach(die => {
                if (die.selected === false) {
                    die.value = Math.floor(Math.random() * 6 + 1)
                    die.img = `die${die.value}.svg`
                }
            })
        },
        holdDie: (state, action) => {
            state.playDice[action.payload].selected = !state.playDice[action.payload].selected
        },
    }
});

export const { rollDice, setInitialDice, holdDie } = diceSlice.actions;

export const selectPlayDice = (state) => state.dice.playDice;

export default diceSlice.reducer;