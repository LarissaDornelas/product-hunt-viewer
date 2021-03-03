export enum Order {
  RANKING = "RANKING",
  NEWEST = "NEWEST",
}

export interface IUseGetPosts {
  first: number;
  after?: string;
  order: Order;
}
