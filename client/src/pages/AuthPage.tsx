import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch } from '../hook/hooks';
import { ChangeEvent, useEffect, useState } from 'react';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { IUser } from '../types/types';
import { Link } from 'react-router-dom';
import {
  AUTHPAGELOGIN_ROUTE,
  AUTHPAGEREGISTRATION_ROUTE,
} from '../utils/const';
import { authUser } from '../redux/thunkAction';

export const AuthPage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = 'Аутентификация';
    if (location?.state?.message) {
      setMessage(location.state.message);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, []);

  const isRegistration = location.pathname === '/user/registration';

  const [formData, setformData] = useState<IUser>(
    isRegistration
      ? { name: '', email: '', password: '', phone: '' }
      : { email: '', password: '' },
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegistration) {
      const arg = { slug: 'auth/signup', formData };
      const result = await dispatch(authUser(arg));
      if (result) {
        alert(result.response.data.error);
        return;
      }
      navigate('/');
    } else {
      const arg = { slug: 'auth/signin', formData };
      const result = await dispatch(authUser(arg));

      if (result) {
        alert(result.response.data.error);
        return;
      }
      navigate('/');
    }
  };

  return (
    <div className="h-full mt-28 flex items-center justify-center">
      <form onSubmit={submitForm} className="flex w-96 max-w-md flex-col gap-4">
        <p>{message && `${message}`}</p>

        {isRegistration && (
          <>
            <p className=" font-bold text-4xl">Регистрация</p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Ваше имя" />
              </div>
              <TextInput
                onChange={changeHandler}
                name="name"
                id="name"
                required
                shadow
                type="name"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Ваш телефон" />
              </div>
              <TextInput
                onChange={changeHandler}
                placeholder="+7 (917) 777-777-77"
                name="phone"
                id="phone"
                required
                shadow
                type="phone"
              />
            </div>
          </>
        )}
        {!isRegistration && <p className=" font-bold text-4xl">Авторизация</p>}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Почта" />
          </div>
          <TextInput
            onChange={changeHandler}
            name="email"
            id="email2"
            placeholder="name@mail.com"
            required
            shadow
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Пароль" />
          </div>
          <TextInput
            onChange={changeHandler}
            name="password"
            id="password2"
            required
            shadow
            type="password"
          />
        </div>
        <div className="flex items-center gap-2">
          {isRegistration ? (
            <>
              Есть аккаунт?
              <Link to={AUTHPAGELOGIN_ROUTE}>
                <p className=" text-[#3477af]">Авторизоваться</p>
              </Link>
            </>
          ) : (
            <>
              Нет аккаунта?
              <Link to={AUTHPAGEREGISTRATION_ROUTE}>
                <p className=" text-[#3477af]">Зарегистрироваться</p>
              </Link>
            </>
          )}
        </div>
        <Button type="submit">
          {isRegistration ? 'Зарегестрироваться' : 'Авторизоваться'}
        </Button>
      </form>
    </div>
  );
};
