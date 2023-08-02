import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { SubcategoryItemCard } from '../components/SubcategoryItemCard/SubcategoryItemCard';

export default function SearchPage() {
  const { state } = useLocation();
  const { data, title } = state;

  const quantityItem = data.filter(({ isActive }) => isActive === true);
  useEffect(() => {
    document.title = 'Поиск';
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="s-t mb-5">
        {
          <h2>
            {`Объявления по запросу «${title}»`}
            <span>{quantityItem.length}</span>
          </h2>
        }
      </div>
      <div className=" w-7/12 flex flex-col gap-5 ">
        {data?.map(
          (item) => item?.isActive && <SubcategoryItemCard item={item} />,
        )}
      </div>
      {/* {data.map(
        ({ id, title, description, price, address, isActive, updaetedAt }) =>
          isActive && (
            <div key={id} className="flex flex-col">
              <div className=" bg-slate-400 h-[156px] w-[208px]"></div>
              <div className=" flex justify-between">
                <div className="">
                  <h2>{title}</h2>
                  <h3>{price}</h3>
                  <p style={{ opacity: '0.6' }}>{description}</p>
                  <p style={{ opacity: '0.6' }}>{address}</p>
                  <p style={{ opacity: '0.6' }}>{updaetedAt}</p>
                </div>
              </div>
            </div>
          ),
      )} */}
    </div>
  );
}
