import './App.css';
import { AuthContext } from "../src/Auth/Context/AuthContext";
import { useContext } from "react";
import Topbar from './Components/Topbar/Topbar';
import LoginPage from './Components/Login/LoginPage';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  const user = useContext(AuthContext);

  return (
    <div>
      <Topbar />
      <div className="container">
        {!user ? <LoginPage /> : <Dashboard />}
      </div>
    </div>
  );
}

export default App;