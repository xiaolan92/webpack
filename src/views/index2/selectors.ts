import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/type';
import { initialState } from './slice';

const selectName = (state:RootState) => state.name || initialState;

export const getNameLoading = createSelector(
  [selectName],
  (name) => name.isLoading,

);

