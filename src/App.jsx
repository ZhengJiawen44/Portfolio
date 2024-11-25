import React from "react";
import { HomeLayout } from "./pages";
import { Home } from "./pages";
import { Blog } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//shared context??
//separate context
//load
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Blog", element: <Blog /> },
      ],
    },
  ]);

  return <RouterProvider router={router}>App</RouterProvider>;
};

export default App;
