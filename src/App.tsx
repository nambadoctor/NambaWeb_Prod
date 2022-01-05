import "./App.css";
import { AuthContext } from "../src/Auth/Context/AuthContext";
import { useContext } from "react";
import LoginPage from "./Components/Login/LoginPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "../src/Telemetry/AppInsights";

function App() {
  const user = useContext(AuthContext);

  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <div>
        {!user ? (
          <LoginPage />
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