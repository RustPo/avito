import { useLocation, useParams } from 'react-router';
import { SubcategoryItemCard } from '../components/SubcategoryItemCard/SubcategoryItemCard';
import { useAppDispatch } from '../hook/hooks';
import { useEffect, useState } from 'react';
import { getAllSubcategory, getSubcategotyItems } from '../redux/thunkAction';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

export const SubcategoryPage = () => {
  const [currentSubcategotyName, setCurrentSubcategotyName] =
    useState<string>('');
  const location = useLocation();
  const dispatch = useAppDispatch();

  const subcategoryItems = useSelector(
    (state: RootState) => state.subcategorySlice.subcategoryItems,
  );

  const getSubcategoryItemsFetch = async () => {
    const slug = `items${location.pathname}`;
    dispatch(getSubcategotyItems(slug));
  };

  const subCatFunc = async () => {
    const result = await dispatch(getAllSubcategory('subcategories'));

    if (result?.length) {
      const cat = result.filter(
        (el) => el.id === subcategoryItems[0]?.subcategoryId,
      );
      setCurrentSubcategotyName(cat[0]);
    }
  };

  useEffect(() => {
    subCatFunc();
  }, [subcategoryItems]);

  useEffect(() => {
    document.title = 'Подкатегории';
    getSubcategoryItemsFetch();
  }, [location]);

  // console.log(subcategoryItems);

  return (
    <div className=" felx flex-col px-28">
      <div className=" flex flex-col">
        <h1 className=" text-center font-bold text-2xl mt-6">
          Объявления в категории {currentSubcategotyName?.title}
        </h1>
      </div>
      <div className=" flex justify-center gap-8">
        {/* <div className="border w-3/12">тут будут фильтры</div> */}
        <div className=" w-9/12 flex flex-col gap-5">
          {/* <div className="">Сортировка</div> */}
          <div className="flex flex-col mt-7 gap-5">
            {subcategoryItems &&
              subcategoryItems.map(
                (item) =>
                  item.isActive && (
                    <SubcategoryItemCard key={item.id} item={item} />
                  ),
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
