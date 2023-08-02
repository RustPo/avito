import { useEffect, useState } from 'react';
import { IFavoritesItem, IUserSlice } from '../../types/types';
import { useAppDispatch } from '../../hook/hooks';
import { getFavorites, getItems } from '../../redux/thunkAction';
import { FavoriteItem } from '../FavoriteItemComponent/FavoriteItem';
import { useDispatch } from 'react-redux';
import { addFavoritesId } from '../../redux/itemSlice';

export const Favorite = ({ user }: IUserSlice) => {
  const dispatch = useAppDispatch();
  const dispatch1 = useDispatch();

  const [favorites, setFavorites] = useState<IFavoritesItem[]>([]);

  const fetchFavorites = async () => {
    const slug = `favorites/user/${user.id}`;
    const result = await dispatch(getFavorites(slug));
    dispatch1(addFavoritesId(result?.map((el) => el.itemId)));
    setFavorites(result);
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold">Избранное</h1>
      </div>
      <div className=" mt-8 flex flex-col gap-8">
        {favorites.length &&
          favorites.map(
            (item) =>
              item.Item.isActive && <FavoriteItem key={item.id} item={item} />,
          )}
      </div>
    </div>
  );
};
