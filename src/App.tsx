import "./App.css";
import { AuthContext } from "../src/Auth/Context/AuthContext";
import { useContext } from "react";
import IndexPage from "./Components/Index/Index";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "../src/Telemetry/AppInsights";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function App() {
  const user = useContext(AuthContext);

  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <div>
        {!user ? (
          <IndexPage />
        ) : (
          <Routes>
            <Route path="/*" element={<Dashboard />} />
          </Routes>
        )}
      </div>
    </AppInsightsContext.Provider>
  );
}

export default App;