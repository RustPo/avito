import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from '../../pages/MainPage';
import CategoryPage from '../../pages/CategoryPage';
import SearchPage from '../../pages/SearchPage';
import ItemPage from '../../pages/ItemPage';
import FormItemPage from '../../pages/FormItemPage';
import ProfilePage from '../../pages/ProfilePage';
import {
  AUTHPAGELOGIN_ROUTE,
  AUTHPAGEREGISTRATION_ROUTE,
  CATEGORYPAGE_ROUTE,
  FAVORITESPAGE_ROUTE,
  FORMITEMPAGE_ROUTE,
  ITEMPAGE_ROUTE,
  MAINPAGE_ROUTE,
  PROFILEOWNERPAGE_ROUTE,
  PROFILEPAGE_ROUTE,
  SEARCHPAGE_ROUTE,
  SUBCATEGORYPAGE_ROUTE,
} from '../../utils/const';
import { AuthPage } from '../../pages/AuthPage';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import FavoritePage from '../../pages/FavoritesPage';
import { SubcategoryPage } from '../../pages/SubcategoryPage';
import { ProfileOwnerPage } from '../../pages/ProfileOwnerPage';
import { useEffect } from 'react';
import { addFavoriteCount } from '../../redux/itemSlice';
import axios from 'axios';

export const AppRoutes = () => {
  const isAuth = useSelector((store: RootState) => store.userSlice.user);

  return (
    <Routes>
      <Route path={MAINPAGE_ROUTE} Component={MainPage} />
      <Route path={CATEGORYPAGE_ROUTE} Component={CategoryPage} />
      <Route path={SEARCHPAGE_ROUTE} Component={SearchPage} />
      <Route path={ITEMPAGE_ROUTE} Component={ItemPage} />
      <Route path={SUBCATEGORYPAGE_ROUTE} Component={SubcategoryPage} />
      <Route path={PROFILEOWNERPAGE_ROUTE} Component={ProfileOwnerPage} />

      {!isAuth.name ? (
        <>
          <Route path={AUTHPAGEREGISTRATION_ROUTE} Component={AuthPage} />
          <Route path={AUTHPAGELOGIN_ROUTE} Component={AuthPage} />
        </>
      ) : (
        <>
          <Route path={FORMITEMPAGE_ROUTE} Component={FormItemPage} />
          <Route path={PROFILEPAGE_ROUTE} Component={ProfilePage} />
          <Route path={FAVORITESPAGE_ROUTE} Component={ProfilePage} />
        </>
      )}
      <Route path="*" Component={MainPage} />
    </Routes>
  );
};
