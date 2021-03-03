import { Order } from "hooks/posts/types";

export interface ITabItem {
  title: string;
  active: boolean;
  value: Order;
}
export interface ITab {
  tabItems: ITabItem[];
  toggleTab: (index: number) => void;
}
