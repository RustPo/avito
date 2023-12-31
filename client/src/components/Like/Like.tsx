import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteId, deleteFavoriteId } from '../../redux/itemSlice';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../hook/hooks';
import { addFavorite, deleteFavorite } from '../../redux/thunkAction';
import { useNavigate } from 'react-router';

interface ILikeProps {
  fav: boolean;
  id: number;
}

export const Like = ({ fav, id }: ILikeProps) => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const actionLiked = () => {
    if (!fav) {
      if (user.name) {
        const slug = `favorites/user/${user.id}`;
        const arg = { slug, itemId: id };
        dispatch(addFavorite(arg));
      } else {
        navigate('/user/login', {
          state: {
            loc: location.pathname,
            message:
              'Для того, что бы добавить товар в избранное необходимо авторизоваться',
          },
        });
      }
    } else {
      if (user.name) {
        const slug = `favorites?userId=${user.id}&itemId=${id}`;
        dispatch(deleteFavorite(slug));
      } else {
        navigate('/user/login', {
          state: { loc: location.pathname, message: 'test' },
        });
      }
    }
  };

  return (
    <>
      {!fav ? (
        <svg
          onClick={actionLiked}
          className=" h-[20px] w-[20px] hover:fill-[#ff0000] hover:h-[23px] hover:w-[23px]"
          fill="#000000"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512.37 512.37"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <g>
                {' '}
                <path d="M475.524,72.933c-33.872-36.293-72.122-56.78-115.583-56.78c-42.308,0-79.083,19.333-103.742,52.277 c-24.591-32.968-61.208-52.277-103.49-52.277c-43.164,0-80.774,20.275-115.429,56.616 c-51.87,54.357-52.062,155.013,14.925,221.999c13.003,13.003,45.393,46.322,91.094,93.615 c21.934,22.7,44.674,46.277,67.387,69.854c7.95,8.252,15.328,15.915,21.947,22.792c6.806,7.073,6.806,7.073,8.317,8.643 c8.393,8.726,22.357,8.726,30.751,0c1.51-1.57,1.51-1.57,8.316-8.643c6.619-6.877,13.997-14.539,21.947-22.792 c22.713-23.577,45.453-47.154,66.715-69.158c46.373-47.99,78.763-81.308,91.766-94.312 C527.176,228.038,526.702,127.752,475.524,72.933z M430.275,264.599c-13.253,13.253-45.689,46.619-91.606,94.137 c-21.952,22.718-44.706,46.31-67.433,69.902c-5.236,5.435-10.224,10.615-14.91,15.482c-4.687-4.868-9.675-10.047-14.911-15.482 c-22.727-23.592-45.482-47.184-66.76-69.205c-46.591-48.215-79.026-81.58-92.279-94.833C31.961,214.185,32.102,140,68.154,102.22 c27.31-28.64,54.69-43.4,84.555-43.4c37.759,0,68.431,22.518,83.608,61.191c7.085,18.053,32.633,18.053,39.718,0 c15.143-38.586,46.063-61.191,83.907-61.191c30.166,0,57.925,14.868,84.393,43.228 C480.097,140.355,480.447,214.426,430.275,264.599z"></path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      ) : (
        <svg
          onClick={actionLiked}
          // className=" w-[20px] h-[20px] hover:fill-black hover:stroke-black"
          className=" w-[20px] h-[20px] hover:fill-black hover:stroke-black hover:h-[23px] hover:w-[23px] "
          fill="#ff0000"
          viewBox="-1.6 -1.6 35.20 35.20"
          stroke="#ff0000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {' '}
            <g
              id="Group_13"
              data-name="Group 13"
              transform="translate(-93.998 -396.695)"
            >
              {' '}
              <path
                id="Path_365"
                data-name="Path 365"
                d="M108.706,410.042A7.884,7.884,0,0,1,108,406.7a10.121,10.121,0,0,1,.708-3.659,10.989,10.989,0,0,1,1.929-3.205,9.586,9.586,0,0,1,2.86-2.272,7.686,7.686,0,0,1,3.5-.864,9,9,0,0,1,6.364,15.365c-.814.813-12.287,11.179-13.364,11.635h0c-1.077-.456-12.55-10.822-13.364-11.635A9,9,0,0,1,103,396.7a7.68,7.68,0,0,1,3.5.864,9.591,9.591,0,0,1,2.861,2.272,11.011,11.011,0,0,1,1.929,3.205A10.141,10.141,0,0,1,112,406.7a7.9,7.9,0,0,1-.707,3.347,7.328,7.328,0,0,1-1.929,2.518"
              />{' '}
            </g>{' '}
          </g>
        </svg>
      )}
    </>
  );
};
