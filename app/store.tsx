import { configureStore } from '@reduxjs/toolkit';
import testCounterReducer from '../src/features/test/testCounterSlice';
import rtkPostReducer from '../src/features/test/rtk/rtkPostSlice';

const store = configureStore({
  reducer: {
    testCounter: testCounterReducer,
    rtkPost: rtkPostReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;