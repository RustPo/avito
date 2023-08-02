import {
  configureStore,
  ThunkAction,
  AnyAction,
  combineReducers,
} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import itemSlice from './itemSlice';
import subcategorySlice from './subcategorySlice';
// import { RootState } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  subcategorySlice: subcategorySlice,
  userSlice: userSlice,
  itemSlise: itemSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type ThunkActionCreator<PayloadType = void, ReturnType = void> = (
  payload: PayloadType,
) => AppThunk<ReturnType>;
