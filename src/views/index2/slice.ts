import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Decrement } from './thunks';
import { InitNameState } from './type';
export const initialState: InitNameState = {
  value: 1,
  isLoading: false
};

export const counterSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(Decrement.fulfilled, (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.isLoading = !state.isLoading;
    });
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
