// store.js

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import characterReducer from './characterSlice';

const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
