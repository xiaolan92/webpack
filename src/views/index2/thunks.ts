import { createAsyncThunk } from '@reduxjs/toolkit';


export const Decrement = createAsyncThunk<number, number>(
  'name/test', async (id) => {
    const num = await Promise.resolve(id);
    return num;
  },
);
