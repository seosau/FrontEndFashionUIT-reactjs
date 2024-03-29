import { Home } from "../pages";
import { Login } from "../pages";
import { Account } from "../pages";
import { Orders } from "../pages";
import { ChangePass } from "../pages";
import { Address } from "../pages";
import { ChainStore } from "../pages";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/menu",
    component: "",
  },
  {
    path: "/cart",
    component: "",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/account/orders",
    component: Orders,
  },
  {
    path: "/account/changepass",
    component: ChangePass,
  },
  {
    path: "/account/address",
    component: Address,
  },
  {
    path: "/chainstore",
    component: ChainStore,
  },
];
