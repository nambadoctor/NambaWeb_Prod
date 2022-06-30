import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './auth/Context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import { PhoneNumberLogin } from './components/PhoneNumberAuth/PhoneNumberLogin';
import './index.css';
import MobileDashboard from './mobile/MobileDashboard';
import './styles/globals.css';
import { reactPlugin } from './telemetry/AppInsights';
toast.configure();

function App() {
    const user = useContext(AuthContext);

    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            {user ? (
                user !== 'loading' && <MobileOrDesktopViewDecider />
            ) : (
                <PhoneNumberLogin />
            )}
        </AppInsightsContext.Provider>
    );
}

export const MobileOrDesktopViewDecider = () => {
    return (
        <div>
            <div className="block md:hidden">
                <MobileDashboard />
            </div>
            <div className="hidden md:block">
                <Dashboard />
            </div>
        </div>
    );
};

export default App;
