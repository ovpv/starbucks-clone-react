export interface IMenu {
  text: string;
  path: string;
}

export const APP_MENU_LINKS: IMenu[] = [
  {
    text: "Menu",
    path: "/menu",
  },
  {
    text: "Nutrition",
    path: "/nutrition",
  },
  {
    text: "Delivers",
    path: "/delivers",
  },
  {
    text: "Rewards",
    path: "/rewards",
  },
];
