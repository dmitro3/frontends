import { configureStore } from '@reduxjs/toolkit';

import contractReducer from './contract';
import modalReducer from './modal';
import userReducer from './userInfo';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    contract: contractReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
