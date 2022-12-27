import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactsUs from "../components/ContactUs/ContactsUs";
import AboutUs from "../components/AboutUs/AboutUs";
import { useAuth } from "../contexts/authContext";
import { ADMIN } from "../helpers/consts";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import EditProductPage from "../pages/EditProductPage";
import ProductDetails from "../components/Products/ProductDetails";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },

      {
        link: "/contacts",
        element: <ContactsUs/>,
        id: 5,
      },

    {
      link: "/About",
      element: <AboutUs />,
      id: 6,
    },
    {
      link: '/products/:id',
      element: <ProductDetailsPage/>,
      id: 7,
    }

  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: '/edit/:id',
      element: <EditProductPage/>,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
