import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0
};

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.counter = state.counter + 1
        },
        resetCount: (state) => {
            state.counter = 0
        },
    }
});

export const { incrementCount, resetCount } = countSlice.actions;

export const selectCount = (state) => state.count.counter

export default countSlice.reducer;