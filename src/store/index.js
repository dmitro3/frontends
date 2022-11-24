import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modal';
import userReducer from './userInfo';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
