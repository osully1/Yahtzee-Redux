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
        setOnes: (state, action) => {
            state['Ones'] = action.payload.filter(x => x.value === 1).length
        },
        setTwos: (state, action) => {
            
        },
        setThrees: (state, action) => {
            
        },
        setFours: (state, action) => {
            
        },
        setFives: (state, action) => {
            
        },
        setSixes: (state, action) => {
            
        },
        setThreeOfAKind: (state, action) => {
            
        },
        setFourOfAKind: (state, action) => {
            
        },
        setFullHouse: (state, action) => {
            
        },
        setSmallStraight: (state, action) => {
            
        },
        setLargeStraight: (state, action) => {
            
        },
        setChance: (state, action) => {
            
        },
        setYahtzee: (state, action) => {
            
        }
    }
});

export const { 
    setOnes,
    setTwos,
    setThrees,
    setFours,
    setFives,
    setSixes,
    setThreeOfAKind,
    setFourOfAKind,
    setFullHouse,
    setSmallStraight,
    setLargeStraight,
    setChance,
    setYahtzee,
} = scoreSlice.actions;

export const selectScore = (state) => state.score;

export default scoreSlice.reducer;