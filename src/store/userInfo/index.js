/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fromSzabo, usdcSM } from 'src/service/connectSM';

const initialState = {
  address: '',
  balance: null,
};

// First, create the thunk
export const fetchUser = createAsyncThunk('fetchUser', async () => {
  const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const balance = await usdcSM.methods.balanceOf(account[0]).call();
  return {
    account: account[0],
    balance: fromSzabo(balance),
  };
});

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
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      // Add user to the state array
      const { account, balance } = action.payload;
      state.address = account;
      state.balance = balance;
    });
  },
});

export const { accountUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
