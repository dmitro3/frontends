/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { contracts } from 'src/service/connectSM';

const initialState = {
  overview: {},
  baseToken: {},
  userInfo: {},
  selectedAddress: '',
};

// First, create the thunk
export const fetchOverview = createAsyncThunk('fetchOverview', async (contract) => {
  const response = await contract.overview();
  return {
    contractAddress: contract.address,
    ...response,
  };
});

export const fetchUserInfo = createAsyncThunk('fetchUserInfo', async (contract, state) => {
  const { address } = state.getState().user;
  const response = await contract.userInfo(address);
  return {
    contractAddress: contract.address,
    ...response,
  };
});

export const fetchBaseToken = createAsyncThunk('fetchBaseToken', async (contract) => {
  const response = await contract.baseToken();
  return {
    contractAddress: contract.address,
    address: response,
  };
});

export const setSelectedAddress = createAsyncThunk('setSelectedAddress', async (index) => {
  const address = await contracts[index].address;
  return address;
});

export const userInfoSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSelectedAddress.fulfilled, (state, action) => {
      // Add user to the state array
      state.selectedAddress = action.payload;
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchOverview.fulfilled, (state, action) => {
      // Add user to the state array
      state.overview = {
        ...state.overview,
        [action.payload.contractAddress]: {
          ...action.payload,
          fundName: action.payload.fundName.split(':')[1],
        },
      };
    });

    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      // Add user to the state array
      state.userInfo = {
        ...state.userInfo,
        [action.payload.contractAddress]: {
          ...action.payload,
        },
      };
    });

    builder.addCase(fetchBaseToken.fulfilled, (state, action) => {
      // Add user to the state array
      state.baseToken = {
        ...state.baseToken,
        [action.payload.contractAddress]: {
          address: action.payload.address,
        },
      };
    });
  },
});

export const { setBaseToken } = userInfoSlice.actions;

export default userInfoSlice.reducer;
