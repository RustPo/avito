import axios, { AxiosResponse } from 'axios';
import { ThunkActionCreator } from './store';

import type {
  IAddFavorite,
  IArgumentAuth,
  ICreateItem,
  IItemData,
  IUser,
} from '../types/types';
import { isAuth } from './userSlice';
import { addFavoriteId, deleteFavoriteId } from './itemSlice';
import { addSubcategoryItems } from './subcategorySlice';

export const getItems: ThunkActionCreator<string> =
  (slug) => async (dispatch) => {
    try {
      const { data } = await axios.get<Promise<AxiosResponse<IItemData[]>>>(
        import.meta.env.VITE_API + slug,
        { withCredentials: true },
      );
      return data;
    } catch (error) {
      return error;
    }
  };

export const authUser: ThunkActionCreator<IArgumentAuth> =
  ({ formData, slug }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_API + slug,
        formData,
        {
          withCredentials: true,
        },
      );
      if (data.response) {
        return data;
      }
      dispatch(isAuth(data));
      return null;
    } catch (error) {
      return error;
    }
  };

export const createItem: ThunkActionCreator<ICreateItem> =
  ({ itemData, slug }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_API + slug,
        itemData,
        {
          withCredentials: true,
        },
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

export const updateItems =
  ({ updateData, slug }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.put(
        import.meta.env.VITE_API + slug,
        updateData,
        {
          withCredentials: true,
        },
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

export const actionUser: ThunkActionCreator<string> =
  (slug) => async (dispatch) => {
    try {
      const { data } = await axios.get<Promise<AxiosResponse>>(
        import.meta.env.VITE_API + slug,
        { withCredentials: true },
      );
      return data;
    } catch (error) {
      return error;
    }
  };

export const getFavorites: ThunkActionCreator<string> = (slug) => async () => {
  const { data } = await axios.get<Promise<AxiosResponse>>(
    import.meta.env.VITE_API + slug,
    { withCredentials: true },
  );
  return data;
};

export const searchItems: ThunkActionCreator<string> =
  (slug) => async (dispatch) => {
    try {
      const { data, status } = await axios.get<
        Promise<AxiosResponse<IItemData[]>>
      >(import.meta.env.VITE_API + slug, { withCredentials: true });
      return { data, status };
    } catch (error) {
      return error;
    }
  };

export const addFavorite: ThunkActionCreator<IAddFavorite> =
  ({ slug, itemId }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_API + slug,
        { itemId },
        {
          withCredentials: true,
        },
      );
      dispatch(addFavoriteId(data.itemId));
    } catch (error) {
      console.error(error);
    }
  };

export const deleteFavorite: ThunkActionCreator<string> =
  (slug) => async (dispatch) => {
    try {
      const { data } = await axios.delete(import.meta.env.VITE_API + slug, {
        withCredentials: true,
      });
      dispatch(deleteFavoriteId(data));
    } catch (error) {
      console.error(error);
    }
  };

export const getSubcategotyItems: ThunkActionCreator<string> =
  (slug) => async (dispatch) => {
    const { data } = await axios.get(import.meta.env.VITE_API + slug, {
      withCredentials: true,
    });
    if (data.length) {
      // return data;
      dispatch(addSubcategoryItems(data));
    }
  };
export const getAllSubcategory: ThunkActionCreator<string> =
  (slug) => async (dispatch) => {
    const { data } = await axios.get(import.meta.env.VITE_API + slug, {
      withCredentials: true,
    });
    if (data.length) {
      return data;
    }
  };
