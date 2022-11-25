/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  overview: {},
  baseToken: {},
  userInfo: {},
  selectedAddress: '',
};

// First, create the thunk
export const fetchOverview = createAsyncThunk('fetchOverview', async ({ instance, governor, order }) => {
  const response = await instance.overview();
  return {
    contractAddress: instance.address,
    governor,
    order,
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

export const userInfoSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
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

export const { setSelectedAddress } = userInfoSlice.actions;

export default userInfoSlice.reducer;
