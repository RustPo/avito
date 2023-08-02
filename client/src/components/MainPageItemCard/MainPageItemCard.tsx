import { useNavigate } from 'react-router';
import { IItemData } from '../../types/types';
import { Like } from '../Like/Like';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

interface IItemMainCardProps {
  item: IItemData;
}
export const MainPageItemCard = ({ item }: IItemMainCardProps) => {
  const FavoritesId = useSelector(
    (state: RootState) => state.itemSlise.favoriteId,
  );

  const user = useSelector((state: RootState) => state.userSlice.user);

  const data = new Date(item.createdAt);

  const navigate = useNavigate();

  const moveItem = (id: number) => {
    navigate(`items/${id}`);
  };

  return (
    <div className="hover:bg-gray-100  shadow-md flex border rounded-2xl flex-col ">
      <div
        onClick={() => moveItem(item.id)}
        className="   cursor-pointer h-[180px] w-[240px]"
      >
        <img
          className="object-cover w-full h-full rounded-t-xl"
          src={item?.Photos[0]?.url}
          alt=""
        />
      </div>
      <div className="flex w-[208px] justify-between">
        <div className=" p-3 w-[190px] flex flex-col ">
          <p className="card-title" onClick={() => moveItem(item.id)}>
            {item.title}
          </p>
          <p className=" card-price">{item.price} ₽</p>
          <p className=" card-adress">{item.address}</p>
          <p className="card-time">
            {data.getDay()}.{data.getMonth()}.{data.getFullYear()}
            {'    '}
            {data.getHours()}:{data.getMinutes()}
          </p>
        </div>
        <div className=" w-[18px] mt-2">
          {FavoritesId.includes(item.id)
            ? item.userId !== user.id && <Like fav={true} id={item.id} />
            : item.userId !== user.id && <Like fav={false} id={item.id} />}
        </div>
      </div>
    </div>
  );
};
