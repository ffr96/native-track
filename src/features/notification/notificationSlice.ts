import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Notification } from '@/types/notification';

const initialState: Notification = {
  message: '',
  type: 'SUCCESS',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<Notification>) => {
      return (state = action.payload);
    },
    removeNotification: (state) => {
      return (state = initialState);
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
