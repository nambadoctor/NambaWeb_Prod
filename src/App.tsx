import "./App.css";
import { AuthContext } from "../src/Auth/Context/AuthContext";
import { useContext } from "react";
import LoginPage from "./Components/Login/LoginPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const user = useContext(AuthContext);

  return (
    <div>
      {!user ? (
        <LoginPage />
      ) : (
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      )}
    </div>
  );
}

export default App;