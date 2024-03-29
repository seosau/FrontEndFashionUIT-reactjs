import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import { Home, AllProducts, Login, Register } from "../pages";
import { Dashboard, CreateProduct, CreateBlog } from "../pages/Admin";
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
  {
    path: "/admin/dashboard",
    component: Dashboard,
    layout: AdminLayout,
  },
  {
    path: "/admin/createproduct",
    component: CreateProduct,
    layout: AdminLayout,
  },
  {
    path: "/admin/createblog",
    component: CreateBlog,
    layout: AdminLayout,
  },
];
