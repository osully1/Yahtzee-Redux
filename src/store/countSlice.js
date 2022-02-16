import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state++
        },
        resetCount: (state) => {
            state = 0
        },
    }
});

export const { incrementCount, resetCount } = countSlice.actions;

export const selectCount = (state) => state.count

export default countSlice.reducer;