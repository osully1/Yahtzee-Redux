import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    'Ones': null,
    'Twos': null,
    'Threes': null,
    'Fours': null,
    'Fives': null,
    'Sixes': null,
    'Three of a Kind': null,
    'Four of a Kind': null,
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
            state['Ones'] = action.payload.filter(x => x === 1).length
        },
        setTwos: (state, action) => {
            state['Twos'] = action.payload.filter(x => x === 2).length * 2
        },
        setThrees: (state, action) => {
            state['Threes'] = action.payload.filter(x => x === 3).length * 3
        },
        setFours: (state, action) => {
            state['Fours'] = action.payload.filter(x => x === 4).length * 4
        },
        setFives: (state, action) => {
            state['Fives'] = action.payload.filter(x => x === 5).length * 5
        },
        setSixes: (state, action) => {
            state['Sixes'] = action.payload.filter(x => x === 6).length * 6
        },
        setThreeOfAKind: (state, action) => {
            let mf = 1
            let m = 0
            let item

            for (let i = 0; i < action.payload.length; i++) {
                for (let j = i; j < action.payload.length; j++) {
                    if (action.payload[i] == action.payload[j])
                        m++;
                    if (mf < m) {
                        mf = m; 
                        item = action.payload[i];
                    }
                }
                m = 0;
            }

            if (mf >= 3) {
                state['Three of a Kind'] = action.payload.reduce((a, b) => a + b, 0)
            } else {
                state['Three of a Kind'] = 0
            }
        },
        setFourOfAKind: (state, action) => {
            let nf = 1
            let n = 0
            let item

            for (let i = 0; i < action.payload.length; i++) {
                for (let j = i; j < action.payload.length; j++) {
                    if (action.payload[i] == action.payload[j])
                        n++;
                    if (nf < n) {
                        nf = n; 
                        item = action.payload[i];
                    }
                }
                n = 0;
            }

            if (nf >= 4) {
                state['Four of a Kind'] = action.payload.reduce((a, b) => a + b, 0)
            } else {
                state['Four of a Kind'] = 0
            }
        },
        setFullHouse: (state, action) => {
            let nf = 1
            let n = 0
            let item
            let newArr

            for (let i = 0; i < action.payload.length; i++) {
                for (let j = i; j < action.payload.length; j++) {
                    if (action.payload[i] == action.payload[j])
                        n++;
                    if (nf < n) {
                        nf = n; 
                        item = action.payload[i];
                    }
                }
                n = 0;
            }            

            if  (nf === 3) {
                newArr = action.payload.filter(x => x !== item)
            }

            if (newArr && newArr[0] === newArr[1]) {
                state['Full House'] = 25
            } else {
                state['Full House'] = 0
            }
        },
        setSmallStraight: (state, action) => {
            if (
                action.payload.includes(1)
                && action.payload.includes(2)
                && action.payload.includes(3)
                && action.payload.includes(4)
                ||
                action.payload.includes(2)
                && action.payload.includes(3)
                && action.payload.includes(4)
                && action.payload.includes(5)
                ||
                action.payload.includes(3)
                && action.payload.includes(4)
                && action.payload.includes(5)
                && action.payload.includes(6)
            ) {
                state['Small Straight'] = 30
            } else {
                state['Small Straight'] = 0
            } 
        },
        setLargeStraight: (state, action) => {
            if (
                action.payload.includes(1)
                && action.payload.includes(2)
                && action.payload.includes(3)
                && action.payload.includes(4)
                && action.payload.includes(5)
                ||
                action.payload.includes(2)
                && action.payload.includes(3)
                && action.payload.includes(4)
                && action.payload.includes(5)
                && action.payload.includes(6)
            ) {
                state['Large Straight'] = 40
            } else {
                state['Large Straight'] = 0
            }
        },
        setChance: (state, action) => {
            state['Chance'] = action.payload.reduce((a, b) => a + b, 0)
        },
        setYahtzee: (state, action) => {
            if (action.payload.every(x => x === action.payload[0])) {
                state['Yahtzee'] = 50
            } else {
                state['Yahtzee'] = 0
            }
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