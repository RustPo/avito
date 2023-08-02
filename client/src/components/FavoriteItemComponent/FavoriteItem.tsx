import { Link } from 'react-router-dom';
import { IFavoritesItem } from '../../types/types';
import { Like } from '../Like/Like';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface IFavoritesItemProps {
  item: IFavoritesItem;
}

export const FavoriteItem = ({ item }: IFavoritesItemProps) => {
  // const FavoritesId = useSelector(
  //   (state: RootState) => state.itemSlise.favoriteId,
  // );

  return (
    <div className="shadow-lg border rounded-xl flex justify-start gap-7 hover:bg-gray-100">
      <Link to={`/items/${item?.Item?.id}`}>
        <div className=" w-[260px] h-[185px] ">
          <img
            className="object-cover rounded-l-xl w-full h-full"
            // src={item?.Item?.Photos[item.Item.Photos.length - 1]?.url}
            src={item?.Item?.Photos[0]?.url}
            alt=""
          />
        </div>
      </Link>
      <div className=" w-6/12 flex p-4 flex-col gap-4">
        <Link to={`/items/${item?.Item?.id}`}>
          <p className="card-title">{item?.Item?.title}</p>
        </Link>
        <p className="card-price">{item?.Item?.price} ₽</p>
        <p className=" card-adress">{item?.Item?.address}</p>
      </div>
      <div className="p-4">
        <Like fav={true} id={item?.Item?.id} />
      </div>
    </div>
  );
};
