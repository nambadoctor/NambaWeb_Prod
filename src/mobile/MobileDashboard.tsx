import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import OrganisationInitialModalPickerComponent from '../components/OrganisationPicker/OrganisationInitialModalPickerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { GetServiceProviderBasic } from '../service-actions/ServiceProviderBasicActions';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import Calendar from '../components/CalendarPicker/Calendar';
import FullPageLoadingDisplay from '../components/UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../components/UIHelperComponents/NonExistentUserDisplayComponent';
import CriticalAlertDisplay from '../components/UIHelperComponents/CriticalAlertDisplay';
import { SetInitialLoadingStartTime } from '../actions/LoadedStatesActions';
import MobileNavBar from './MobileNavBar';
import MobileAppointmentsTableView from './MobileAppointmentsTableView';
import MobileDesktopToggleView from '../components/MobileDesktopToggleView/MobileDesktopToggleView';

function MobileDashboard() {
    const dispatch = useDispatch();
    const serviceProviderBasicState = useSelector(
        (state: RootState) => state.ServiceProviderBasicState,
    );

    useEffect(() => {
        SetTrackTrace(
            'Dashboard Mounted',
            'Dashboard',
            SeverityLevel.Information,
        );
        dispatch(SetInitialLoadingStartTime());
        dispatch(GetServiceProviderBasic());
    }, []);

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
            <div style={{ overflowX: 'hidden' }}>
                <MobileNavBar />
                <div style={{ marginTop: 50 }}>
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
