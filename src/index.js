import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';

import App from "./App";
import Detay from "./pages/Detay";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/detay/:plate",
        element: <Detay />
    }
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );