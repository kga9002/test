import React, { createContext, useContext, useReducer } from "react";

const AuthStateContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    default:
      throw new Error("error");
  }
}

const AuthStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null);

  // 전역으로 dispatch를 내려서 사용할수 있게 해주는 건가..?
  return (
    <AuthStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthStateContext.Provider>
  );
};

const useAuthStateContext = () => {
  const context = useContext(AuthStateContext);
  if (context === null) {
    throw new Error("error");
  }
  return context;
};

export { useAuthStateContext, AuthStateProvider };
