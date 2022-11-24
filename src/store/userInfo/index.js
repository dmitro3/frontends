/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  balance: null,
};

export const userInfoSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    accountUser: (state, action) => {
      const { account, balance } = action.payload;
      state.address = account;
      state.balance = balance;
    },
  },
});

export const { accountUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
