import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import './Input.css';
import './input-adaptive.css';
import { getItems, searchItems } from '../../redux/thunkAction';
import { useAppDispatch } from '../../hook/hooks';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import {
  IInputType,
  arrayCategories,
  arraySubCategories,
} from '../../types/types';
import { MAINPAGE_ROUTE } from '../../utils/const';

export default function Input() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const myDropDown = useRef(null);
  const openDropDown = useRef(null);
  const mysearchDown = useRef(null);

  const [categoies, setCategoies] = useState<arrayCategories>([
    {
      id: 0.5,
      url: 'string',
      title: '',
      createdAt: '2023-07-13 14:15:42.709053+07',
      updatedAt: '2023-07-13 14:15:42.709053+07',
    },
  ]);

  const [subCategoies, setSubCategoies] = useState<arraySubCategories>([
    {
      id: 0.6,
      title: '',
      url: 'string',
      categoryId: 0.6,
      createdAt: '2023-07-13 14:15:42.709053+07',
      updatedAt: '2023-07-13 14:15:42.709053+07',
    },
  ]);

  const [showSubCategoies, setShowSubCategoies] = useState<arraySubCategories>([
    {
      id: 0.7,
      title: '',
      url: 'string',
      categoryId: 0.7,
      createdAt: '2023-07-13 14:15:42.709053+07',
      updatedAt: '2023-07-13 14:15:42.709053+07',
    },
  ]);
  const [inputValue, setInputValue] = useState<IInputType>({ inputTitle: '' });

  const [inputClicks, setInputClicks] = useState([]);
  const [searchData, setSearchData] = useState([]);

  async function inputClick() {
    const data = await dispatch(getItems('items'));

    setInputClicks(data);
    openDropDown.current.classList.remove('open');
    myDropDown.current.classList.remove('show');
  }

  function searchHandler(event: ChangeEvent<HTMLInputElement>) {
    setInputValue({ [event.target.name]: event.target.value });
  }

  async function inputDownHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') return searchBtnHandler();
    if (event.key === 'Escape')
      return mysearchDown.current.classList.remove('show');

    const result = inputClicks.filter(({ title }) =>
      title.toLowerCase().includes(inputValue.inputTitle.toLowerCase()),
    );

    if (result.length && inputValue.inputTitle.length) {
      mysearchDown.current.classList.add('show');
      setSearchData(result.slice(0, 5));
    }

    if (!result.length || !inputValue.inputTitle.length) {
      mysearchDown.current.classList.remove('show');
    }
  }

  async function searchBtnHandler() {
    if (inputValue.inputTitle) {
      const { data, status } = await dispatch(
        searchItems(`search?inputTitle=${inputValue.inputTitle}`),
      );

      if (status === 200)
        navigate(`/search?title=${inputValue.inputTitle}`, {
          replace: false,
          state: { title: inputValue.inputTitle, data },
        });

      setInputValue({ inputTitle: '' });
    }

    mysearchDown.current.classList.remove('show');
    openDropDown.current.classList.remove('open');
    myDropDown.current.classList.remove('show');
  }

  async function clickLiHandler(event: MouseEvent) {
    const { data, status } = await dispatch(
      searchItems(`search?inputTitle=${event.target.textContent}`),
    );

    if (status === 200)
      navigate(`/search?title=${event.target.textContent}`, {
        replace: false,
        state: { title: event.target.textContent, data },
      });

    setInputValue({ title: '' });
    mysearchDown.current.classList.remove('show');
  }

  function linkHandler() {
    myDropDown.current.classList.remove('show');
    openDropDown.current.classList.remove('open');
  }

  async function test() {
    const cat = await dispatch(getItems('categories'));
    const subCat = await dispatch(getItems('subcategories'));

    setCategoies(cat);
    setSubCategoies(subCat);
  }

  useEffect(() => {
    test();
  }, []);

  function dropHandle() {
    setShowSubCategoies([
      {
        id: 0.7,
        title: '',
        url: 'string',
        categoryId: 0.7,
        createdAt: '2023-07-13 14:15:42.709053+07',
        updatedAt: '2023-07-13 14:15:42.709053+07',
      },
    ]);
    myDropDown.current.classList.toggle('show');
    openDropDown.current.classList.toggle('open');
    mysearchDown.current.classList.remove('show');
  }

  function showHandler(event: MouseEvent) {
    const res = subCategoies.filter(
      ({ categoryId }) => Number(event.target.id) === categoryId,
    );
    setShowSubCategoies(res);
  }

  return (
    <div className="Input">
      <div className="middle">
        <div className="dropdown">
          <div className="btn">
            <Link to={MAINPAGE_ROUTE}>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <button onClick={dropHandle} className="dropbtn">
              <div id="nav-icon4" ref={openDropDown}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div>Все&nbsp;категории</div>
            </button>
          </div>
          <div className="input-search">
            <div className="input">
              <input
                onClick={inputClick}
                onKeyUp={inputDownHandler}
                onChange={searchHandler}
                value={inputValue.inputTitle}
                type="text"
                name="inputTitle"
                placeholder="Поиск по объявлениям"
              />
            </div>
            <button onClick={searchBtnHandler}>Найти</button>
          </div>
        </div>

        <div className="container-cat">
          <div className="dropdown-content" ref={myDropDown}>
            <div className="cat">
              {categoies.map(({ title, id }) => (
                <p
                  className="title-cat"
                  key={id}
                  id={`${id}`}
                  onMouseOver={showHandler}
                >
                  {title}
                </p>
              ))}
            </div>
            <div className="sub-cat">
              <>
                {categoies.map(({ id, title }) =>
                  id === showSubCategoies[0].categoryId ? (
                    <h2 key={id} className="title-sub">
                      <>{title}</>
                      {
                        <span>
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z"
                              fill="#000"
                            ></path>
                          </svg>
                        </span>
                      }
                    </h2>
                  ) : null,
                )}
                {showSubCategoies.map(({ title, id, url }) => (
                  <Link
                    onClick={linkHandler}
                    className="link"
                    to={url}
                    key={id}
                  >
                    {title}
                  </Link>
                ))}
              </>
            </div>
          </div>
        </div>
        <div className="dropdown-content stk" ref={mysearchDown}>
          <ul>
            {searchData.map(({ title, id }) => (
              <li key={id} onClick={clickLiHandler}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
