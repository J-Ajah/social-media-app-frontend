import Login from "./pages/login/Login";
import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);

  const errorMessage = <div className="flex items-center justify-center h-[100vh] text-2xl">Sorry, page not available</div>
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={user ? <Home /> : <Register />}></Route>
        <Route
          path={"/login"}
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route path={"/register"} element={user ? <Navigate to="/"/>:<Register />}></Route>
        <Route path={"/messenger"} element={!user ? <Navigate to="/"/>:<Messenger />}></Route>
        <Route path={"/profile/:username"} element={<Profile />}></Route>
        <Route path={"*"} element={errorMessage}></Route>

      </Routes>
    </Router>
  );
}

export default App;
