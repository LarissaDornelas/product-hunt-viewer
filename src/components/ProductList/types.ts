export interface IProductItem {
  id: string;
  name: string;
  description: string;
  votesCount: string;
  thumbnail: string;
}

export interface IProductList {
  data: IProductItem[];
}
