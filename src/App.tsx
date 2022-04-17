import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../src/styles/loginstyles.module.scss';
import './App.css';
import { AuthContext } from './auth/Context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import { PhoneNumberLogin } from './components/PhoneNumberAuth/PhoneNumberLogin';
import './index.css';
import MobileDashboard from './mobile/MobileDashboard';
import { RootState } from './store';
import { reactPlugin } from './telemetry/AppInsights';
toast.configure();

function App() {
    const user = useContext(AuthContext);

    const isMobile = useSelector(
        (state: RootState) => state.mobileOrDesktopViewReducer.isMobile,
    );

    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            {user ? (
                user !== 'loading' && (
                    <MobileOrDesktopViewDecider isMobile={isMobile} />
                )
            ) : (
                <div className={styles.container}>
                    <PhoneNumberLogin />
                </div>
            )}
        </AppInsightsContext.Provider>
    );
}

interface MobileOrDesktopViewProps {
    isMobile: boolean;
}

export const MobileOrDesktopViewDecider: React.FC<MobileOrDesktopViewProps> = (
    props,
) => {
    // const isMobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div>
            {props.isMobile || true ? <MobileDashboard /> : <Dashboard />}
        </div>
    );
};

export default App;
