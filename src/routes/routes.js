import { Home } from "../pages";
import AllProducts from "../pages/AllProducts/AllProducts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
