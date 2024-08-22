import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import Admin from "./pages/admin";
import { ShoppingCartProvider } from "./components/cartContext";
import MainLayout from "../src/components/layout";

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
    element: <Admin />,
  },
  // add more routes here
]);

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={mainRouter} />
    </ShoppingCartProvider>
  );
};

export default App;
