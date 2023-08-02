import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import circle from './circle.png';
import {
  AUTHPAGELOGIN_ROUTE,
  AUTHPAGEREGISTRATION_ROUTE,
  FAVORITESPAGE_ROUTE,
  FORMITEMPAGE_ROUTE,
  MAINPAGE_ROUTE,
  PROFILEPAGE_ROUTE,
} from '../../utils/const';
import Input from '../Input/Input';
import { useAppDispatch } from '../../hook/hooks';
import { actionUser, getItems } from '../../redux/thunkAction';
import { isAuth } from '../../redux/userSlice';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { addFavoriteCount } from '../../redux/itemSlice';

export default function Navbar() {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const favoritesCount = useSelector(
    (state: RootState) => state.itemSlise.favoriteCount,
  );

  const dispatch1 = useAppDispatch();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkAuth = async () => {
    const slug = 'auth/check';
    const result = await dispatch1(actionUser(slug));
    if (result?.response?.status === 400) {
      console.log('===>', result);
      return;
    }

    dispatch(isAuth(result));
  };

  const logout = () => {
    const slug = 'auth/signout';
    dispatch(
      isAuth({
        email: '',
        name: '',
        id: 0,
        phone: '',
        avatarUrl: '',
        updatedAt: new Date(),
        createdAt: new Date(),
      }),
    );
    dispatch1(actionUser(slug));
    navigate('/');
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      {user.name ? (
        <>
          <div className="master">
            <div
              className="start"
              style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
            >
              <Link to={MAINPAGE_ROUTE}>
                <div className="logo logo2">
                  <img src={circle} alt="logo" />
                </div>
              </Link>
              <Link to={FORMITEMPAGE_ROUTE}>
                <h2 className="a">Разместить объявление</h2>
                <svg
                  height="15px"
                  width="15px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 495 495"
                  fill="#ffffff"
                  stroke="#ffffff"
                  className="plus"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <polygon points="495,227.5 267.5,227.5 267.5,0 227.5,0 227.5,227.5 0,227.5 0,267.5 227.5,267.5 227.5,495 267.5,495 267.5,267.5 495,267.5 "></polygon>{' '}
                  </g>
                </svg>
              </Link>
            </div>
            <div
              style={{
                marginLeft: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
              }}
              className="end"
            >
              <Link to={FAVORITESPAGE_ROUTE}>
                <svg
                  role="img"
                  aria-hidden="true"
                  data-icon="favorites-filled"
                  viewBox="0 0 24 24"
                  name="favorites-filled"
                  className="desktop-1gzlbya color: white-200 like"
                  style={
                    favoritesCount !== 0
                      ? { fill: '#ff0000', height: '30px' }
                      : { fill: 'grey', height: '30px' }
                  }
                >
                  <path
                    id="my-path"
                    d="M7.71 3c1.78 0 3.34.87 4.29 2.21A5.22 5.22 0 0 1 16.29 3a5.73 5.73 0 0 1 4.1 9.73l-7.72 7.61a.95.95 0 0 1-1.34 0l-7.72-7.62A5.73 5.73 0 0 1 7.71 3Z"
                  ></path>

                  {favoritesCount >= 10 ? (
                    <text x="6.7" y="13.9">
                      <tspan fill="white" fontSize="9px">
                        {favoritesCount}
                      </tspan>
                    </text>
                  ) : (
                    <text x="9.1" y="14">
                      <tspan fill="white" fontSize="9px">
                        {favoritesCount}
                      </tspan>
                    </text>
                  )}
                </svg>
              </Link>
              <div style={{ display: 'flex' }}>
                <Link to={PROFILEPAGE_ROUTE}>
                  <div
                    className="der"
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <div className=" prof relative text-white flex justify-center items-center bg-[#886a5e] h-[30px] w-[30px] rounded-[50%]">
                      {user.avatarUrl ? (
                        <img className=" rounded-full" src={user.avatarUrl} />
                      ) : (
                        user.name.slice(0, 1)
                      )}
                    </div>
                    <nav>
                      <ul className="menu" style={{ marginTop: '30px' }}>
                        <li id="hv">
                          <svg
                            role="img"
                            aria-hidden="true"
                            data-icon="chevron-narrow"
                            viewBox="0 0 24 24"
                            name="chevron-narrow"
                            className="desktop-1hruqqp"
                            width="20px"
                            fill="white"
                            style={{ transform: 'rotate(180deg)' }}
                          >
                            <path d="M12 10.4142L16.2929 14.7071C16.6834 15.0976 17.3166 15.0976 17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L6.29289 13.2929C5.90237 13.6834 5.90237 14.3166 6.29289 14.7071C6.68342 15.0976 7.31658 15.0976 7.70711 14.7071L12 10.4142Z"></path>
                          </svg>
                          <ul className="sub-menu">
                            <Link to={MAINPAGE_ROUTE}>
                              <li>Главная</li>
                            </Link>
                            <Link to={PROFILEPAGE_ROUTE}>
                              <li>Профиль</li>
                            </Link>

                            <Link to={FORMITEMPAGE_ROUTE}>
                              <li>Разместить объявление</li>
                            </Link>
                            <Link to={FAVORITESPAGE_ROUTE}>
                              <li>Избранное</li>
                            </Link>
                            <li onClick={logout}>Выйти</li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="master no-auth">
          <Link to={AUTHPAGELOGIN_ROUTE}>
            <h2>Вход и Регистриция</h2>
          </Link>
        </div>
      )}
      <Input />
    </>
  );
}
