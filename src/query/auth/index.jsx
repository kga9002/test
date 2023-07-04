import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAuthStateContext } from "../../context/AuthContext";

export const client = axios.create({
  baseURL: "https://edgefarm.ai/api/manager",
});

export const useFetchLogin = () => {
  const fetchLogin = (loginData) => {
    return client.post("/login", loginData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  };
  const navigate = useNavigate();
  return useMutation(fetchLogin, {
    onSuccess(data) {
      const { access_token } = data.data;
      localStorage.setItem("Auth", access_token);
      client.defaults.headers.common[
        "Authorization"
      ] = `bearer ${access_token}`;
      navigate("/");
    },
    onError(error) {
      console.log(error);
      if (error.response.status === 403) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    },
  });
};

export const useFetchUser = (token) => {
  const fetchUser = () => {
    return client.get("/users");
  };
  const { dispatch } = useAuthStateContext();
  return useQuery(["user"], fetchUser, {
    enabled: token,
    onSuccess(data) {
      dispatch({
        type: "SET_USER",
        payload: data,
      });
    },
    onError(error) {
      console.log(error);
      localStorage.removeItem("Auth");
      client.defaults.headers.common["Authorization"] = "";
    },
  });
};
