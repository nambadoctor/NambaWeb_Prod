import {
    faHome,
    faSearch,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { useEffect } from 'react';
import { Col, Container, Nav, NavItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { SetInitialLoadingStartTime } from '../actions/LoadedStatesActions';
import '../App.css';
import { clearAuthToken } from '../auth/FirebaseUserInfoHelper';
import Calendar from '../components/CalendarPicker/Calendar';
import MobileDesktopToggleView from '../components/MobileDesktopToggleView/MobileDesktopToggleView';
import OrganisationInitialModalPickerComponent from '../components/OrganisationPicker/OrganisationInitialModalPickerComponent';
import CriticalAlertDisplay from '../components/UIHelperComponents/CriticalAlertDisplay';
import FullPageLoadingDisplay from '../components/UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../components/UIHelperComponents/NonExistentUserDisplayComponent';
import { GetServiceProviderBasic } from '../service-actions/ServiceProviderBasicActions';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import MobileAppointmentsTableView from './MobileAppointmentsTableView';

const tabs = [
    {
        route: '/Appointments',
        icon: faHome,
        label: 'appointments',
    },
    {
        route: '/Patients',
        icon: faSearch,
        label: 'patients',
    },
    {
        route: '/login',
        icon: faUserCircle,
        label: '+',
    },
];

function MobileDashboard() {
    const dispatch = useDispatch();
    const serviceProviderBasicState = useSelector(
        (state: RootState) => state.ServiceProviderBasicState,
    );
    useEffect(() => {
        console.log('hello init mobile');
        SetTrackTrace(
            'Dashboard Mounted',
            'Dashboard',
            SeverityLevel.Information,
        );
        clearAuthToken();
        dispatch(SetInitialLoadingStartTime());
        dispatch(GetServiceProviderBasic());
    }, [dispatch]);

    function AppointmentsAndCalendarView() {
        return (
            <div
                style={{
                    margin: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                <Container fluid>
                    <Row>
                        <Col md="9">
                            <MobileDesktopToggleView></MobileDesktopToggleView>
                            <h5 style={{ marginBottom: 20 }}>Appointments</h5>
                            <MobileAppointmentsTableView />
                        </Col>
                        <Col md="3">
                            <h5 style={{ marginBottom: 20 }}>Calendar</h5>
                            <Row>
                                <Calendar />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    function MobileDashboardView() {
        return (
            <div>
                <div style={{ marginBottom: 200 }}>
                    <Routes>
                        <Route
                            path="/Appointments"
                            element={AppointmentsAndCalendarView()}
                        />
                        <Route
                            path="/"
                            element={AppointmentsAndCalendarView()}
                        />
                    </Routes>
                </div>

                <nav
                    className="navbar fixed-bottom navbar-light"
                    role="navigation"
                >
                    <Nav className="w-100">
                        <div className=" d-flex flex-row justify-content-around w-100">
                            {tabs.map((tab, index) => (
                                <NavItem key={`tab-${index}`}>
                                    <Link
                                        to={tab.route}
                                        style={{
                                            color: 'black',
                                            fontSize: 18,
                                            fontWeight: '600',
                                            marginLeft: 20,
                                            marginRight: 40,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            <FontAwesomeIcon
                                                size="lg"
                                                icon={tab.icon}
                                            />
                                            <div>{tab.label}</div>
                                        </div>
                                    </Link>
                                </NavItem>
                            ))}
                        </div>
                    </Nav>
                </nav>
            </div>
        );
    }

    return (
        <>
            <div>
                {serviceProviderBasicState.serviceProvider ? (
                    MobileDashboardView()
                ) : (
                    <NonExistentUserDisplayComponent />
                )}
                <OrganisationInitialModalPickerComponent />
                <FullPageLoadingDisplay />
                <CriticalAlertDisplay />
            </div>
        </>
    );
}

export default MobileDashboard;
