import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/user';

const initialState: User = {
  id: '',
  username: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return (state = action.payload);
    },
    removeUser: (state) => {
      return (state = initialState);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
