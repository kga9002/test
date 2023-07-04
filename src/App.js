import { NavLink, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { client } from "./query/auth";

function App() {
  function logout() {
    localStorage.removeItem("Auth");
    client.defaults.headers.common["Authorization"] = "";
    window.location.replace("/");
  }

  return (
    <div className="App">
      <Header />
      <div>
        <NavLink to="/">Home</NavLink> | <NavLink to="/test">Test</NavLink> |
        &nbsp;<button onClick={logout}>Logout</button>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
