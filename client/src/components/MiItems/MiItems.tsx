import { Tabs } from 'flowbite-react';
import { ProfileItemCard } from '../ProfileItemCard/ProfileItemCard';
import { useAppDispatch } from '../../hook/hooks';
import { useEffect, useState } from 'react';
import { getItems } from '../../redux/thunkAction';
import { IItemData, IUserSlice } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const MiItems = ({ user }: IUserSlice) => {
  const [items, setItems] = useState<IItemData[]>([]);

  const dispatch = useAppDispatch();

  const getUserItems = async () => {
    const slug = `items/user/${user.id}`;
    const result = await dispatch(getItems(slug));
    setItems(result);
  };

  useEffect(() => {
    getUserItems();
  }, [user]);

  return (
    <div>
      <h1 className=" text-3xl font-bold">Мои объявления</h1>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item active title="Активные">
          <div className=" flex flex-col gap-6">
            {items.length &&
              items.map(
                (item) =>
                  item.isActive && (
                    <ProfileItemCard item={item} key={item.id} />
                  ),
              )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Архив">
          <div className=" flex flex-col gap-6">
            {items.length &&
              items.map(
                (item) =>
                  !item.isActive && (
                    <ProfileItemCard item={item} key={item.id} />
                  ),
              )}
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};
