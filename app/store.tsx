import { configureStore } from '@reduxjs/toolkit';
import testCounterReducer from '../src/features/test/testCounterSlice';

export default configureStore({
  reducer: {
    testCounter: testCounterReducer,
  },
});
