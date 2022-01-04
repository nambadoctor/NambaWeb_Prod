import "./App.css";
import { AuthContext } from "../src/Auth/Context/AuthContext";
import { useContext } from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const user = useContext(AuthContext);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
