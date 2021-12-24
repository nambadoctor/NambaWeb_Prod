import './App.css';
import { AuthContext } from "../src/Auth/Context/AuthContext";
import { useContext } from "react";
import LoginPage from './Components/Login/LoginPage';
import Dashboard from './Components/Dashboard/Dashboard';
import './index.css'

function App() {

  const user = useContext(AuthContext);

  return (
    <div>
      {!user ? <LoginPage /> : <Dashboard />}
    </div>
  );
}

export default App;