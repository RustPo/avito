export interface IItemData {
  id: number;
  title: string;
  description: string;
  price: number;
  address: string;
  count: number;
  createdAt: Date;
  updatedAt: Date;
  features: object;
  isActive: boolean;
  subcategoryId: number;
  url: string;
  userId: number;
  favorites: number;
  Photos: {
    createdAt: Date;
    updatedAt: Date;
    id: number;
    itemId: number;
    url: string;
  }[];
}

export interface IUser {
  name?: string;
  email: string;
  password: string;
  phone?: string;
}
export interface IUserAuth {
  name: string;
  email: string;
  id: number;
  phone: string;
  avatarUrl: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IArgumentAuth {
  formData: IUser;
  slug: string;
  querySearch: IInputType;
}

export interface IUserSlice {
  user: {
    email: string;
    name: string;
    id: number;
    phone: string;
    avatarUrl: string;
    updatedAt: Date;
    createdAt: Date;
  };
}

export interface IFavoritesItem {
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  id: number;
  itemId: number;
  Item: {
    address: string;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    feauters: object;
    id: number;
    isActive: boolean;
    price: number;
    subcategory: number;
    title: string;
    url: string;
    userId: number;
    Photos: {
      createdAt: Date;
      updatedAt: Date;
      id: number;
      itemId: number;
      url: string;
    }[];
  };
}

export interface IInputType {
  inputTitle: string;
}

export interface ICategory {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISubCategory {
  id: number;
  title: string;
  url: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IResponse {
  data: [];
  status: number;
}
export interface IAddItem {
  title: string;
  description: string;
  price: number;
  address: string;
  subcategoryId: number;
  isActive: boolean;
  features: { condition: string };
}

export interface ICreateItem {
  itemData: IAddItem;
  slug: string;
}

export interface IAddFavorite {
  slug: string;
  itemId: number;
}

export type arrayCategories = [ICategory];
export type arraySubCategories = [ISubCategory];

export interface IItemSlice {
  favoriteId: number[];
  favoriteCount: number;
}

export type IItempageResult = {
  id: number;
  title: string;
  description: string;
  address: string;
  count: number;
  price: number;
};

export interface ISubcategoryItem {
  id: number;
  title: string;
  description: string;
  price: number;
  address: string;
  subcategoryId: number;
  userId: number;
  features: object;
  isActive: boolean;
  url: string;
  count: number;
  createdAt: Date;
  updatedAt: Date;
  User: {
    name: string;
    phone: string;
    avatarUrl: null;
  };
  Photos: [
    {
      id: number;
      url: string;
      path: null;
      itemId: number;
      createdAt: Date;
      updatedAt: Date;
    },
  ];
}

export interface ISubCategorySlice {
  currentSubcategory: number;
  subcategoryItems: ISubcategoryItem[];
}
