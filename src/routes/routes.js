import { Home, AllProducts, Login, Register } from "../pages";

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
    path: "/register",
    component: Register,
  },
  {
    path: "/products",
    component: AllProducts,
  },
];
