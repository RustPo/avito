import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IItemSlice } from '../types/types';

const initialState: IItemSlice = {
  favoriteId: [],
  favoriteCount: 0,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addFavoritesId(state, action: PayloadAction<number[]>) {
      state.favoriteId = action.payload;
    },
    addFavoriteId(state, action: PayloadAction<number>) {
      state.favoriteId.push(action.payload);
    },
    deleteFavoriteId(state, action: PayloadAction<number>) {
      state.favoriteId = state.favoriteId.filter((el) => el != action.payload);
    },
    addFavoriteCount(state, action: PayloadAction<number>) {
      state.favoriteCount = action.payload;
    },
  },
});

export default itemSlice.reducer;
export const {
  addFavoriteCount,
  addFavoritesId,
  addFavoriteId,
  deleteFavoriteId,
} = itemSlice.actions;
