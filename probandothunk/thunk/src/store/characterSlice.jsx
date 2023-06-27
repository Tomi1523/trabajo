// characterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataError } = characterSlice.actions;

export default characterSlice.reducer;

export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch(fetchDataStart());

    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();

      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  };
};
