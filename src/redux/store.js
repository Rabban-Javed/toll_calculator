// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import tollReducer from './tollReducer';

const store = configureStore({
  reducer: {
    toll: tollReducer,
  },
});

export default store;
