import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from '@/features/notification/notificationSlice';
import userSlice from '../features/auth/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    notification: notificationSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
