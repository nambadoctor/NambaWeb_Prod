import './App.css';
import { AuthContext } from '../src/Auth/Context/AuthContext';
import { useContext } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import './index.css';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from '../src/Telemetry/AppInsights';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileDashboard from './mobile/MobileDashboard';
import { PhoneNumberLogin } from './Components/PhoneNumberAuth/PhoneNumberLogin';
import styles from '../src/Styles/loginstyles.module.scss';

toast.configure();

function App() {
    const user = useContext(AuthContext);

    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            {user ? (
                user !== 'loading' && <MobileOrDesktopViewDecider />
            ) : (
                <div className={styles.container}>
                    <PhoneNumberLogin />
                </div>
            )}
        </AppInsightsContext.Provider>
    );
}

function MobileOrDesktopViewDecider() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return <div>{isMobile ? <MobileDashboard /> : <Dashboard />}</div>;
}

export default App;