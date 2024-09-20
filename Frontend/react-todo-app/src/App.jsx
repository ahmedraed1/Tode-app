import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import { BASE_URL } from "./utils/constance";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
