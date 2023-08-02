import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISubCategorySlice, ISubcategoryItem } from '../types/types';

const initialState: ISubCategorySlice = {
  currentSubcategory: 0,
  subcategoryItems: [],
};

const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState,
  reducers: {
    changeSubcategoty(state, action: PayloadAction<number>) {
      state.currentSubcategory = action.payload;
    },
    addSubcategoryItems(state, action: PayloadAction<ISubcategoryItem[]>) {
      state.subcategoryItems = action.payload;
    },
  },
});

export default subcategorySlice.reducer;
export const { changeSubcategoty, addSubcategoryItems } =
  subcategorySlice.actions;
