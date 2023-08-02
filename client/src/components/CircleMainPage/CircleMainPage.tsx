import { useNavigate } from 'react-router';
import { IUserAuth } from '../../types/types';
import { PROFILEOWNERPAGE_ROUTE } from '../../utils/const';

interface ICircleProps {
  photo: IUserAuth;
}

export const CircleMainPage = ({ photo }: ICircleProps) => {
  const navigate = useNavigate();
  const moveProfile = () => {
    navigate(PROFILEOWNERPAGE_ROUTE, { state: { info: { userId: photo.id } } });
  };
  // <Link
  //               to={PROFILEOWNERPAGE_ROUTE}
  //               key={item.id}
  //               state={{ info: { userId: item.id } }}
  //             ></Link>

  return (
    <div onClick={moveProfile} className="cursor-pointer flex flex-col ">
      <div className="p-1 border-[2.5px]  hover:border-black w-[100px] border-red-600 rounded-full h-[100px]">
        <img className=" rounded-full" src={photo?.avatarUrl} alt="" />
      </div>
      <p className=" text-center">{photo.name}</p>
    </div>
  );
};
