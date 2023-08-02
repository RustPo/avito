import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Link, useLocation } from 'react-router-dom';
import { MiItems } from '../components/MiItems/MiItems';
import { Favorite } from '../components/FavoriteComponents/Favorite';
import { FAVORITESPAGE_ROUTE, PROFILEPAGE_ROUTE } from '../utils/const';

export default function ProfilePage() {
  const user = useSelector((store: RootState) => store.userSlice.user);
  const location = useLocation();
  const isNotOwner = { ...location?.state };

  useEffect(() => {
    document.title = 'Профиль';
  }, []);

  // console.log(isNotOwner);

  const isFavorites = location.pathname === '/profile/favorites';

  return (
    <div className="h-full mt-10 flex justify-center">
      <div className="flex gap-5 w-9/12">
        <div className=" flex flex-col gap-4 w-3/12">
          <div className="flex flex-col gap-1 border-b-2">
            {user?.avatarUrl?.length ? (
              <div className=" relative text-6xl text-white flex justify-center items-center bg-[#886a5e] h-[100px] w-[100px] rounded-[50%]">
                <img className="rounded-[50px]" src={user.avatarUrl} alt="" />
                <img
                  className=" absolute top-20 left-16 bg-[#ebebeb] rounded-[50px]"
                  src="	https://www.avito.ru/dstatic/build/assets/6d402852ca337d280111.svg"
                  alt=""
                />
              </div>
            ) : (
              <div className=" relative text-6xl text-white flex justify-center items-center bg-[#886a5e] h-[100px] w-[100px] rounded-[50%]">
                <img
                  className=" absolute top-20 left-16 bg-[#ebebeb] rounded-[50px]"
                  src="	https://www.avito.ru/dstatic/build/assets/6d402852ca337d280111.svg"
                  alt=""
                />
                {user.name.slice(0, 1)}
              </div>
            )}

            <div>{user.name}</div>
            {/* <div>Отзывы</div> */}
          </div>
          <div className="border-b-2 flex flex-col gap-1">
            <Link to={PROFILEPAGE_ROUTE}>
              <p className={isFavorites ? 'text-cyan-400' : ''}>
                Мои объявления
              </p>
            </Link>
            <Link to={FAVORITESPAGE_ROUTE}>
              <p className={!isFavorites ? 'text-cyan-400' : ''}>Избранное</p>
            </Link>
          </div>
        </div>
        <div className=" w-9/12 flex flex-col">
          {isFavorites ? <Favorite user={user} /> : <MiItems user={user} />}
        </div>
      </div>
    </div>
  );
}
