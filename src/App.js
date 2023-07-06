import { Outlet } from "react-router-dom";
import Header from "./components/Share/header";
import Nav from "./components/Share/nav";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex">
        <div className="float-left h-screen w-fit">
          <Nav />
        </div>
        <div className="float-left h-screen p-5 flex-auto overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
