import './App.css';
import { AuthContext } from '../src/Auth/Context/AuthContext';
import { useContext, useEffect } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import './index.css';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from '../src/Telemetry/AppInsights';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileDashboard from './mobile/MobileDashboard';
import { PhoneNumberLogin } from './Components/PhoneNumberAuth/PhoneNumberLogin';
import styles from '../src/Styles/loginstyles.module.scss';
import { RootState } from './store';
import { useSelector } from 'react-redux';
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

    return <div>{props.isMobile ? <MobileDashboard /> : <Dashboard />}</div>;
};

export default App;
