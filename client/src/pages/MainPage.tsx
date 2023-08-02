import React, { useEffect, useState } from 'react';
import { actionUser, getFavorites, getItems } from '../redux/thunkAction';
import { useAppDispatch } from '../hook/hooks';

import { IFavoritesItem, IItemData, IUserAuth } from '../types/types';
import { MainPageItemCard } from '../components/MainPageItemCard/MainPageItemCard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addFavoriteCount, addFavoritesId } from '../redux/itemSlice';

import { CircleMainPage } from '../components/CircleMainPage/CircleMainPage';
import { Link } from 'react-router-dom';
import { PROFILEOWNERPAGE_ROUTE } from '../utils/const';
import axios from 'axios';

export default function MainPage() {
  const [items, setItems] = useState<IItemData[]>([]);
  const [users, setUsers] = useState<IUserAuth[]>([]);
  const FavoritesId = useSelector(
    (state: RootState) => state.itemSlise.favoriteId,
  );
  const user = useSelector((store: RootState) => store.userSlice.user);

  const dispatch1 = useAppDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/favorites/count/${user.id}`)
      .then(({ data }) => {
        dispatch(addFavoriteCount(data.favoritesCount));
      });
    console.log('test');
  }, [FavoritesId]);

  const fetchItems = async () => {
    const slug = 'items';
    const resultUsers = await dispatch1(actionUser('auth/users'));
    setUsers(resultUsers);
    const result = await dispatch1(getItems(slug));
    setItems(result);
  };

  useEffect(() => {
    document.title = 'Otiva';
    fetchItems();
  }, []);

  const fetchFavorites = async () => {
    const slug = `favorites/user/${user.id}`;
    const result = await dispatch1(getFavorites(slug));
    dispatch(addFavoritesId(result?.map((el) => el.itemId)));
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  return (
    <div className=" flex flex-col ">
      <div className="w-10/12 flex flex-col self-center mt-10 ml-7 mb-8">
        <div className=" w-fit self-center ">
          <h2 className=" font-bold text-2xl mb-4">Популярные категории</h2>
          <div className="flex gap-3">
            <Link to="/telefony/mobile">
              <div className=" w-[140px] h-[90px] main-popular">
                <span className="text-base p-2 absolute">
                  Мобильные <br /> телефоны
                </span>
                <img className="h-[89px] " src="../public/iphone.png" alt="" />
              </div>
            </Link>

            <Link to="/kompyutery/monobloki">
              <div className=" flex w-[175px] justify-between  h-[90px] p-2 main-popular">
                <span className=" text-base p-2 ">
                  Моно - <br /> блоки
                </span>
                <img className="w-[80px] " src="../public/imac.png" alt="" />
              </div>
            </Link>
            <Link to="/audio_i_video/televizory">
              <div className=" flex flex-col w-[115px] h-[90px]    p-2 main-popular">
                <span className=" text-base ">Телевизоры</span>
                <img
                  className="h-[50px] w-[90px] "
                  src="../public/tv.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to="/kompyutery/sistemnye_bloki">
              <div className=" flex flex-col w-[130px] h-[90px]    p-2 main-popular">
                <span className=" text-base ">
                  Компью - <br />
                  теры
                </span>
                <img
                  className="h-[70px] w-[60px] absolute ml-[55px] mt-2 "
                  src="../public/pk.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to="/kompyutery/noutbuki">
              <div className=" flex flex-col w-[130px] h-[90px]    p-2 main-popular">
                <span className=" text-base ">Ноутбуки</span>
                <img
                  className="h-[85px] w-[75px] absolute ml-[40px]  "
                  src="../public/notebook.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to="/audio_i_video/naushniki">
              <div className=" flex flex-col w-[130px] h-[90px]    p-2 main-popular">
                <span className=" text-base ">Наушники</span>
                <img
                  className="h-[85px] w-[75px] absolute ml-[50px]  "
                  src="../public/headfons.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to="/audio_i_video/akustika_kolonki">
              <div className=" flex flex-col w-[130px] h-[90px] items-end    p-2 main-popular">
                <span className=" text-base ">Колонки</span>
                <img
                  className="h-[85px] w-[75px] absolute mr-[40px]  "
                  src="../public/musik.png"
                  alt=""
                />
              </div>
            </Link>
            <Link to="/planshety_i_elektronnye_knigi/planshety">
              <div className=" flex flex-col w-[130px] h-[90px] items-end p-2 main-popular">
                <span className=" text-base ">Планшеты</span>
                <img
                  className="h-[75px] w-[65px] absolute mr-[45px] mt-2  "
                  src="../public/planshet.png"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <h2 className=" font-bold text-2xl mt-9">Популярные продавцы</h2>
          <div className="mt-6 flex gap-5">
            {users?.map((item) => (
              <CircleMainPage key={item.id} photo={item} />
            ))}
          </div>
          <p className=" mt-[20px] ml-3 font-bold text-2xl">
            Последние объявления
          </p>
        </div>
      </div>
      <div className="flex self-center w-9/12 ml-7  flex-wrap justify-center gap-10">
        {items.length &&
          items.map(
            (item) =>
              // item.userId !== user.id &&
              item.isActive && <MainPageItemCard key={item.id} item={item} />,
          )}
      </div>
    </div>
  );
}
