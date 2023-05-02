import { configureStore } from '@reduxjs/toolkit';
import GreetingReducer from './reducer/greetings';

const store = configureStore({
  reducer: {
    greeting: GreetingReducer,
  },
});

export default store;