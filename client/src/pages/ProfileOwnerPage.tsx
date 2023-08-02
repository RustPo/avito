import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hook/hooks';
import { actionUser, getItems } from '../redux/thunkAction';
import { IItemData, ISubcategoryItem, IUserAuth } from '../types/types';
import { SubcategoryItemCard } from '../components/SubcategoryItemCard/SubcategoryItemCard';
import { RootState } from '../redux/store';

export const ProfileOwnerPage = () => {
  const [currentUser, setCurrentUser] = useState<IUserAuth>();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [items, setItems] = useState<ISubcategoryItem[]>([]);

  const itemsFetch = async () => {
    const id = location?.state?.info?.userId;
    const slug = `items/user/${id}`;
    const result = await dispatch(getItems(slug));
    if (result) {
      setItems(result);
    }
  };

  const getCurrentUser = async () => {
    const resultUsers = await dispatch(actionUser('auth/users'));
    setCurrentUser(resultUsers?.filter((el) => el.id === items[0]?.userId)[0]);
  };

  useEffect(() => {
    itemsFetch();
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, [items]);

  return (
    <div className="h-full mt-10 flex justify-center">
      <div className="  flex gap-5 w-9/12">
        <div className=" flex flex-col gap-4 items-center w-3/12">
          <div className=" relative text-6xl text-white flex justify-center items-center bg-[#886a5e] h-[100px] w-[100px] rounded-[50%]">
            <img
              className=" rounded-full"
              src={currentUser?.avatarUrl}
              alt=""
            />
          </div>
          <p className="text-center text-lg">{currentUser?.name}</p>
          <div>
            <button className="border-2 rounded-xl px-2 py-1">
              Показать номер
            </button>
          </div>
        </div>
        <div className="w-9/12 ">
          <h2 className=" text-2xl mb-5">Объявления пользователя:</h2>
          <div className="flex flex-col gap-5">
            {items.map(
              (item) =>
                item.isActive && (
                  <SubcategoryItemCard
                    key={item.id}
                    item={item}
                  ></SubcategoryItemCard>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
