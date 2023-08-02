import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  addFavorite,
  deleteFavorite,
  getItems,
  updateItems,
} from '../redux/thunkAction';
import { useAppDispatch } from '../hook/hooks';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from '../redux/store';
import { IItemData } from '../types/types';
import { Carousel } from 'flowbite-react';
import { ItemPageMap } from '../components/ItamPageMap/ItemPageMap';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addFavoriteCount } from '../redux/itemSlice';

export default function ItemPage() {
  const [item, setItem] = useState<IItemData>({});
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showMessage, setShowMessage] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [avatar, setAvatar] = useState('');
  const dispatch1 = useDispatch();

  const FavoritesId = useSelector(
    (state: RootState) => state.itemSlise.favoriteId,
  );

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/favorites/count/${user.id}`)
      .then(({ data }) => {
        dispatch(addFavoriteCount(data.favoritesCount));
      });
  }, [FavoritesId]);

  const labelCss = 'block text-m font-medium leading-6 text-gray-900 mb-3 ';
  const inputCss =
    'block w-[636px] h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

  const dispatch = useAppDispatch();
  const { itemId } = useParams();

  const userId = useSelector((user: RootState) => user.userSlice.user.id);
  const user = useSelector((store: RootState) => store.userSlice.user);

  const fetchItem = async () => {
    const slug = `items/${itemId}`;
    const result = await dispatch(getItems(slug));
    setItem(result);
    console.log(result);
    // console.log('item.user.avatarUrl ->>>>>', item?.User?.avatarUrl)
    // console.log('2222222 item.user.avatarUrl ->>>>>', item?.User?.phone)
    setTitle(result.title);
    setPrice(result.price);
    setAddress(result.address);
    setDescription(result.description);
    setAvatar(result.User.avatarUrl);
  };

  const updateItem = async () => {
    const updateData = { title, price, address, description };
    const slug = `items/${item.id}`;
    const result = await dispatch(updateItems({ updateData, slug }));
  };

  useEffect(() => {
    fetchItem();
  }, []);

  useEffect(() => {
    document.title = `Объявление ${item?.title && `- ${item?.title}`}`;
  }, [title]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!title || !price || !address || !description) {
      setShowMessage(true);
      return;
    }
    setItem((prevItem) => ({
      ...prevItem,
      title: title,
      price: price,
      address: address,
      description: description,
    }));
    updateItem();
    setIsEditing(false);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const isFav = FavoritesId.includes(item.id);

  const actionLiked = () => {
    if (!isFav) {
      const slug = `favorites/user/${userId}`;
      const arg = { slug, itemId: item.id };
      dispatch(addFavorite(arg));
    } else {
      const slug = `favorites?userId=${userId}&itemId=${item.id}`;
      dispatch(deleteFavorite(slug));
    }
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }, [showMessage]);

  const handleNumber = () => {
    setShowNumber(true);
  };

  return (
    <>
      <div className="h-full mt-10 flex justify-center">
        <div className="ml-8 flex flex-col w-[636px]">
          {item?.title ? (
            <>
              {isEditing ? (
                <>
                  <label htmlFor="category" className={labelCss}>
                    Категория объявления:
                  </label>
                  <input
                    id="category"
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className={inputCss}
                  />
                  {/* <label htmlFor="price" className={labelCss}>
                    Цена:
                  </label>
                  <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    className={inputCss}
                  /> */}
                  {/* <button
                    onClick={handleSave}
                    className="rounded-md bg-emerald-400 w-52 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Сохранить
                  </button> */}
                </>
              ) : (
                <>
                  <p className="text-4xl font-bold">{item.title}</p>
                  {/* <p className="text-4xl font-semibold mt-5">{item.price} ₽</p> */}
                  <div className="flex gap-5 flex-row">
                    {item.userId === userId && (
                      <button
                        onClick={handleEdit}
                        className=" rounded-md bg-emerald-400 w-52 px-3 py-2 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Редактировать
                      </button>
                    )}
                  </div>
                </>
              )}
              <div className="flex flex-col items-center mt-10 mb-10">
                {item?.Photos.length === 1 ? (
                  <div className=" bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className="w-[636px]" src={item?.Photos[0]?.url} />
                  </div>
                ) : (
                  <Carousel className="w-[600px] h-[380px]">
                    {item?.Photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
                      >
                        <img src={photo.url} />
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>

              <div>
                {isEditing ? (
                  <>
                    <label htmlFor="address" className={labelCss}>
                      Адрес:
                    </label>
                    <input
                      id="address"
                      type="text"
                      value={address}
                      onChange={handleAddressChange}
                      className={inputCss}
                    />
                  </>
                ) : (
                  <>
                    <p className="text-3xl font-semibold mt-3 mb-3">Адрес</p>
                    <p>{item.address}</p>
                  </>
                )}
                <div className="flex w-[636px] h-[380px] border-2 justify-center items-center">
                  <ItemPageMap adress={item.address} />
                </div>
              </div>
              {isEditing ? (
                <>
                  <label htmlFor="description" className={labelCss}>
                    Описание товара:
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="block w-[600px] h-52 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    onClick={handleSave}
                    className="rounded-md bg-emerald-400 w-52 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Сохранить
                  </button>
                  {showMessage && (
                    <p className="text-red-500 text-l">
                      Все поля необходимо заполнить
                    </p>
                  )}
                </>
              ) : (
                <div className="w-[600px] text-justify">
                  <p className="text-3xl font-semibold mt-10 mb-3">
                    Описание товара
                  </p>
                  <p className="mb-10">{item.description}</p>
                </div>
              )}
            </>
          ) : (
            <p>Объявление не найдено</p>
          )}
        </div>
        <div className="flex flex-col gap-4 w-3/12 shadow-xl items-center">
          <>
            <div className="flex flex-col gap-4">
              {isEditing ? (
                <>
                  <label htmlFor="price" className={labelCss}>
                    Цена:
                  </label>
                  <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    className="block w-[288px] h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </>
              ) : (
                <p className="text-4xl font-bold ">{item.price} ₽</p>
              )}
              {isFav ? (
                <button
                  onClick={actionLiked}
                  className="rounded-sm bg-slate-400  w-72 h-16 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ❌ Удалить из избранного
                </button>
              ) : (
                <button
                  onClick={actionLiked}
                  className="rounded-sm bg-slate-400  w-72 h-16 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ❤️ Добавить в избранное
                </button>
              )}
              <button
                onClick={handleNumber}
                className="flex items-center justify-center bg-emerald-400 rounded-sm w-72 h-16 px-3 py-2 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {showNumber ? (
                  <p>{item?.User?.phone}</p>
                ) : (
                  <p>
                    Показать телефон
                    <br /> {item?.User?.phone.slice(0, 7) + 'XXX-XX-XX'}
                  </p>
                )}
              </button>
            </div>
            <div className="flex flex-row gap-7 shadow w-full justify-center h-[150px]">
              <div className="flex flex-col">
                <p className="mt-5">{item?.User?.name}</p>
                <div className="flex flex-row">
                  <p className="text-[#ffb020] mr-2">★★★★★ </p>
                  <p> 5.0</p>
                </div>
              </div>
              {avatar ? (
                <div className=" relative text-6xl text-white flex justify-center items-center bg-[#886a5e] h-[100px] w-[100px] rounded-[50%]">
                  <img className="rounded-[50px]" src={avatar} alt="" />
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
            </div>
            <div className="flex h-1/2 border-5 items-center justify-center border-4 w-11/12">
              <h1 className="rotate-45 text-xl">
                Здесь могла бы быть ваша реклама
              </h1>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
