/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  overview: {},
};

export const userInfoSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setContractOverview: (state, action) => {
      state.overview = action.payload;
    },
  },
});

export const { setContractOverview } = userInfoSlice.actions;

export default userInfoSlice.reducer;
