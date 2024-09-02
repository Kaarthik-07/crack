import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import Admin from "./pages/admin";
import AdminOrder from "./pages/adminOrder"; // Assuming you have this component
import { ShoppingCartProvider } from "./components/cartContext";
import MainLayout from "../src/components/layout";
import AdminLayout from "./components/adminLayout"; // Import the new AdminLayout
import AdminPending from "./pages/adminPending";
import AdminChecked from "./pages/adminChecked";
import ViewAllPages from "./pages/viewAllPages";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <Register />
      </MainLayout>
    ),
 },
  {
    path: "/product",
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <MainLayout>
        <Checkout />
      </MainLayout>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminLayout>
        <Admin />
      </AdminLayout>
    ),
  },
  {
    path:'/viewAll',
    element:(
      <MainLayout>
        <ViewAllPages />
      </MainLayout>
    )
  },
  {
    path: "/admin/order",
    element: (
      <AdminLayout>
        <AdminOrder />
      </AdminLayout>
    ),
  },
  {
    path: "/admin/pending",
    element: (
      <AdminLayout>
        <AdminPending />
      </AdminLayout>
    ),
  },
  {
    path: "/admin/checked",

    element: (
      <AdminLayout>
        <AdminChecked />
      </AdminLayout>
    ),
  },
  {}
  // Add more admin-related routes here, all wrapped in AdminLayout
]);

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={mainRouter} />
    </ShoppingCartProvider>
  );
};

export default App;
