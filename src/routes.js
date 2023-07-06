import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import Login from "./components/Auth/login.jsx";
import Main from "./components/Main/main.jsx";
import ErrorPage from "./components/Share/errorPage.jsx";
import Register from "./components/Auth/register.jsx";
import Auth from "./components/Auth/auth.jsx";
import Test from "./components/Main/test.jsx";
import TestOne from "./components/Main/testone.jsx";
import TestTwo from "./components/Main/testtwo.jsx";
import ProtectedRoute from "./components/Main/protectedRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    // protectedroute로 토큰 존재 여부 검사하고 넘기기
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "test",
        element: <Test />,
        children: [
          { index: true, element: <TestOne /> },
          { path: "testtwo", element: <TestTwo /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
