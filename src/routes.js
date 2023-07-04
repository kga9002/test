import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import Login from "./components/login.jsx";
import Main from "./components/main.jsx";
import ErrorPage from "./components/errorPage.jsx";
import Register from "./components/register.jsx";
import Auth from "./components/auth.jsx";
import Test from "./components/test.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";

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
      { path: "test", element: <Test /> },
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
