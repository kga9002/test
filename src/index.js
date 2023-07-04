import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { router } from "./routes.js";
import { AuthStateProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthStateProvider>
        <RouterProvider router={router}>
          <ReactQueryDevtools initialIsOpen={true} />
        </RouterProvider>
      </AuthStateProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
