import "./App.css";
import { AuthContext } from "../src/Auth/Context/AuthContext";
import { useContext } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./index.css";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "../src/Telemetry/AppInsights";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexPage from "./Components/Index/Index";
import MobileDashboard from "./Components/mobile/MobileDashboard";

toast.configure();

function App() {
  const user = useContext(AuthContext);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <div>
        {isMobile && user && <MobileDashboard />}
        {!isMobile && (!user ? <IndexPage /> : <Dashboard />)}
      </div>
    </AppInsightsContext.Provider>
  );
}

export default App;
