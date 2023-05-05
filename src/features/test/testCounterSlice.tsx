import { createSlice } from "@reduxjs/toolkit";

export const testCounterSlice = createSlice({
  name : 'testCounterSlice',
  initialState: {
    teljari: 0
  },
  reducers: {
    incrementTestStoreCounter: (state) => {
      console.log('inc 1');
      state.teljari += 1;
      console.log('inc 2');
    },
    decrementTestStoreCounter: (state) => {
      console.log('dec 1');
      state.teljari -= 1;
      console.log('dec 2');
    }
  }
});

export const selectTestCounter = (state: any) => state.testCounter.teljari;
export const { incrementTestStoreCounter, decrementTestStoreCounter} = testCounterSlice.actions;
export default testCounterSlice.reducer;
