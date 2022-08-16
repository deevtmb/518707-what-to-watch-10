import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

const api = createAPI();

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: api,
    }
  })
});
