import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { client, useFetchUser } from "../query/auth";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("Auth");
  const isToken = !!token;
  useEffect(() => {
    if (token) {
      client.defaults.headers.common["Authorization"] = `bearer ${token}`;
    }
  });
  // 토큰 여부에 따라 useFetchUser를 실행
  // 토큰 인증 실패시 useFetchUser에서 로그아웃
  useFetchUser(isToken);

  return token === null ? <Navigate to="/auth" /> : children;
}
