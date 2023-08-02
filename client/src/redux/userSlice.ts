import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserAuth, IUserSlice } from '../types/types';

const initialState: IUserSlice = {
  user: {
    email: '',
    name: '',
    id: 0,
    phone: '',
    avatarUrl: '',
    updatedAt: new Date(),
    createdAt: new Date(),
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isAuth(state, action: PayloadAction<IUserAuth>) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { isAuth } = userSlice.actions;
