import React from "react";
import "./assets/index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Providers } from "./providers";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import AuthLayout from "./pages/_auth/AuthLayout";
import Signin from "./pages/_auth/Signin";
import Signup from "./pages/_auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return { authStatus: true, name: "polsing" };
    },
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shopping",
        element: <Shopping />,
        loader: () => {
          return { name: "polsing" };
        },
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <Signin />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
