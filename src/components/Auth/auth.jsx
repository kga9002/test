import React from "react";
import Header from "../Share/header";
import { Navigate, Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="h-screen overflow-y-hidden">
      {/* 로그인 되어있는데 또 로그인 접근시 리다이렉트 */}
      {localStorage.getItem("Auth") !== null ? (
        <Navigate to="/" />
      ) : (
        <div>
          <Header />
          <Outlet />
        </div>
      )}
    </div>
  );
}
