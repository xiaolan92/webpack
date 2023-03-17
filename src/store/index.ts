import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import name from '../views/index2/slice';

const rootReducer = combineReducers({
  name
});
export const store = configureStore({ reducer: rootReducer });
