import { FC } from "react";
import MenuPage from "../../../pages/menu/MenuPage";

export interface IMenu {
  text: string;
  path: string;
  comp: FC;
}

export const APP_MENU_LINKS: IMenu[] = [
  {
    text: "Menu",
    path: "/menu",
    comp: MenuPage,
  },
  {
    text: "Nutrition",
    path: "/nutrition",
    comp: MenuPage,
  },
  {
    text: "Delivers",
    path: "/delivers",
    comp: MenuPage,
  },
  {
    text: "Rewards",
    path: "/rewards",
    comp: MenuPage,
  },
];
