import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createItem } from '../redux/thunkAction';
import { useAppDispatch } from '../hook/hooks';
import { useNavigate } from 'react-router';
import { getItems } from '../redux/thunkAction';
import { AddItemMap } from '../components/AddItemMap/AddItemMap';

export default function FormItemPage() {
  const [category, setCategory] = useState<number>(1);
  const [url, setUrl] = useState<string>('/telefony/mobile');
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [condition, setCondition] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [categories, setCategories] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [photosArr, setPhotosArr] = useState([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const labelCss = 'block text-m font-medium leading-6 text-gray-900 mb-3 ';
  const inputCss =
    'block w-[600px] h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const json = JSON.parse(e.target.value);
    setCategory(json.id);
    setUrl(json.url);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleConditionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCondition(e.target.value);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const userId = useSelector((user: RootState) => user.userSlice.user.id);

  const uploadFiles = async (files, itemId, userId) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    if (itemId) {
      formData.append('itemId', itemId);
    } else if (userId) {
      formData.append('userId', userId);
    }

    const response = await fetch(
      import.meta.env.VITE_API + `upload?itemId=${itemId}`,
      {
        method: 'POST',
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error('Failed to upload files');
    }

    const data = await response.json();
    return data;
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();
    const slug = `items/${userId}`;
    const itemData = {
      title,
      description,
      price,
      address,
      subcategoryId: category,
      isActive: true,
      features: { condition },
      url: url,
    };
    console.log(itemData);
    if (!title || !price || !condition || !address || !description) {
      setShowMessage(true);
      return;
    }
    const data = await dispatch(createItem({ itemData, slug }));
    const fileInput = document.getElementById('file-input');
    const photos = await uploadFiles(fileInput.files, data.id, userId);
    setPhotosArr(photos);
    console.log(photosArr);
    if (data && photos.length) {
      navigate('/profile');
    }
  };

  const getCategories = async () => {
    const slug = `categories/optgroup`;
    const cat = await dispatch(getItems(slug));
    setCategories(cat);
  };

  useEffect(() => {
    document.title = 'Публикация объявления';
    getCategories();
  }, []);

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [showMessage]);

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col items-center"
    >
      <div className="space-y-5">
        <div>
          <p class=" mt-[20px] mb-12 font-bold text-2xl">Разместить объявление</p>
          <label htmlFor="category" className={labelCss}>
            Категория объявления:
          </label>
          <select
            onChange={handleCategoryChange}
            className="block w-[600px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            {categories?.length &&
              categories.map((category) => (
                <optgroup key={category.id} label={category.title}>
                  {category.Subcategories.map((subcategory) => (
                    <option
                      key={subcategory.id}
                      value={JSON.stringify({
                        id: subcategory.id,
                        url: subcategory.url,
                      })}
                    >
                      {subcategory.title}
                    </option>
                  ))}
                </optgroup>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="title" className={labelCss}>
            Название объявления:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className={inputCss}
          />
        </div>
        <div>
          <label htmlFor="price" className={labelCss}>
            Цена:
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            className={inputCss}
          />
        </div>
        <div>
          <label className={labelCss}>Состояние:</label>
          <div>
            <input
              type="radio"
              id="new"
              name="condition"
              value="new"
              checked={condition === 'new'}
              onChange={handleConditionChange}
            />
            <label htmlFor="new">Новое</label>
          </div>
          <div>
            <input
              type="radio"
              id="used"
              name="condition"
              value="used"
              checked={condition === 'used'}
              onChange={handleConditionChange}
            />
            <label htmlFor="used">БУ</label>
          </div>
        </div>
        <div>
          <label htmlFor="description" className={labelCss}>
            Описание объявления:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="block w-[600px] h-[200px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="addresses" className={labelCss}>
            Адрес:
          </label>
          <input
            type="text"
            // id="address"
            id="suggest"
            value={address}
            onChange={handleAddressChange}
            className={inputCss}
          />
          <AddItemMap inputValue={address} setInputValue={setAddress} />
        </div>
        <div>
        <label htmlFor="file-input" className={labelCss}>
            Загрузить фотографии:
          </label>
          <input type="file" id="file-input" multiple="multiple" />
        </div>
        {/* <input type="text" defaultValue={imgUrl} className={inputCss} /> */}
        <div className="flex gap-10 flex-row justify-end">
          <button
            type="submit"
            className="rounded-md bg-[#285e89] w-full mt-10 mb-10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3478af] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[indigo-600]"
          >
            Опубликовать объявление
          </button>
          {showMessage && (
            <p className="text-red-500 text-l">
              Все поля необходимо заполнить!
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
