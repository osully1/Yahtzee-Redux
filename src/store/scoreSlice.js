import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    threeOfAKind: null,
    fourOfAKind: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    chance: null,
    yahtzee: null,
    sum: null,
    bonus: null,
    totalScore: null
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