import { configureStore } from '@reduxjs/toolkit';
import GreetingReducer from './greetingSlice/greetings';

const store = configureStore({
  reducer: {
    greeting: GreetingReducer,
  },
});

export default store;
