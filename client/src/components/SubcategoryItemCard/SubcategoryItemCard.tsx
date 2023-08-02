import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ISubcategoryItem } from '../../types/types';
import { Button } from 'flowbite-react';
import { PROFILEOWNERPAGE_ROUTE, PROFILEPAGE_ROUTE } from '../../utils/const';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

interface ISubcategotyItemProps {
  item: ISubcategoryItem;
}

export const SubcategoryItemCard = ({ item }: ISubcategotyItemProps) => {
  const user = useSelector((store: RootState) => store.userSlice.user);

  const location = useLocation();
  const navigate = useNavigate();
  const isProfile = location.pathname === '/profile/user';

  const data = new Date(item.createdAt);

  const nav = () => {
    if (user.id === item.userId) {
      navigate(PROFILEPAGE_ROUTE);
      return;
    }
    navigate(PROFILEOWNERPAGE_ROUTE, { state: { info: item } });
  };

  return (
    <div className="border shadow-md group/item flex gap-5 rounded-xl hover:bg-gray-100">
      <Link to={`/items/${item.id}`}>
        <div className=" cursor-pointer h-[177px] w-[236px]">
          <img
            className="object-cover w-full h-full rounded-l-xl"
            src={item.Photos[0]?.url}
            alt=""
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col w-7/12 justify-around">
        <Link to={`/items/${item.id}`}>
          <h1 className="card-title">{item.title}</h1>
        </Link>
        <p className="card-price">{item.price} ₽</p>
        {/* <p className="text-sm text-[#757575] max-w-[468px] max-h-[72px] line-clamp-3"> */}
        <p className="text-sm text-[#757575]  line-clamp-2">
          {item.description}
        </p>
        <p className="card-adress">{item.address}</p>
        <p className="card-time">
          {data.getDay()}.{data.getMonth()}.{data.getFullYear()}
          {'    '}
          {data.getHours()}:{data.getMinutes()}
        </p>
      </div>
      {!isProfile && (
        <div className="p-4 w-44 ">
          <div className=" group-hover/item:invisible ">Контакты</div>
          <div className=" flex flex-col gap-3 group/edit invisible group-hover/item:visible">
            <button className=" px-2 hover:bg-gray-200 h-7 border border-gray-600 rounded-md text-xs">
              Показать телефон
            </button>

            {/* <Link to={PROFILEOWNERPAGE_ROUTE} state={{ info: item }}>
              <button className=" px-2 hover:bg-gray-200 h-7 border border-gray-600 rounded-md text-xs">
                Открыть профиль
              </button>
            </Link> */}

            <button
              onClick={nav}
              className=" px-2 hover:bg-gray-200 h-7 border border-gray-600 rounded-md text-xs"
            >
              Открыть профиль
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
