import { Link } from 'react-router-dom';
import { IItemData } from '../../types/types';

interface IItemProfileProps {
  item: IItemData;
}

export const ProfileItemCard = ({ item }: IItemProfileProps) => {
  return (
    <div className=" shadow-lg flex border rounded-xl justify-start gap-10 hover:bg-gray-100">
      <Link to={`/items/${item.id}`}>
        {/* <div className="border w-[250px] h-[180px] bg-slate-400"> */}
        <div className=" w-[260px] h-[185px] ">
          <img
            className="object-cover rounded-l-xl w-full h-full"
            src={item?.Photos[0]?.url}
            alt=""
          />
        </div>
      </Link>
      <div className=" w-6/12 p-4 flex flex-col gap-4">
        <Link to={`/items/${item.id}`}>
          {/* <p className="text-[red] text-xl font-bold">{item.title}</p> */}
          <p className="card-title">{item.title}</p>
        </Link>
        <p className="card-price">{item.price} ₽</p>
        <p className="card-adress">{item.address}</p>
      </div>
      <div className="flex flex-col gap-3 mt-4 justify-start">
        <div className="flex gap-1 items-center">
          <svg className=" w-[18px] h-[18px]">
            <path
              fill="#F71B47"
              d="M6.143 3A3.48 3.48 0 019 4.476 3.48 3.48 0 0111.857 3c2.137 0 3.81 1.753 3.81 3.81 0 1.077-.463 1.984-1.05 2.644a.607.607 0 01-.028.03l-5.143 5.079a.635.635 0 01-.892 0L3.408 9.48c-.625-.626-1.075-1.612-1.075-2.671C2.333 4.673 4.086 3 6.143 3z"
            ></path>
          </svg>
          <p>{item.favorites}</p>
        </div>
        <div className="flex gap-1 items-center">
          <svg className=" w-[18px] h-[18px]">
            <path fill="#000" d="M10.999 9a2 2 0 11-4 0 2 2 0 014 0z"></path>
            <path d="M.996 9a8.67 8.67 0 0116.005 0A8.669 8.669 0 01.996 9zm11.336 0a3.333 3.333 0 10-6.667 0 3.333 3.333 0 006.667 0z"></path>
          </svg>
          <p>{item.count}</p>
        </div>
      </div>
    </div>
  );
};
