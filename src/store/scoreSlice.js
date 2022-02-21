import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    'Ones': null,
    'Twos': null,
    'Threes': null,
    'Fours': null,
    'Fives': null,
    'Sixes': null,
    'Three of a Kind': null,
   ' Four of a Kind': null,
    'Full House': null,
    'Small Straight': null,
    'Large Straight': null,
    'Chance': null,
    'Yahtzee': null,
    'Sum': null,
    'Bonus': null,
    'TotalScore': null
};

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setScore: (state, action) => {
            
        },
    }
});

export const { incrementRollCount, resetRollCount, setScore } = scoreSlice.actions;

export const selectScore = (state) => state.score;

export default scoreSlice.reducer;