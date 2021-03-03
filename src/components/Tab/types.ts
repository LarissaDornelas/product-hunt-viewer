export interface ITabItem {
  title: string;
  active: boolean;
}
export interface ITab {
  tabItems: ITabItem[];
  toggleTab: (index: number) => void;
}
