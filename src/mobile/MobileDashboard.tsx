import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import OrganisationInitialModalPickerComponent from '../Components/OrganisationPicker/OrganisationInitialModalPickerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { GetServiceProviderBasic } from '../ServiceActions/ServiceProviderBasicActions';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import Calendar from '../Components/CalendarPicker/Calendar';
import FullPageLoadingDisplay from '../Components/UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../Components/UIHelperComponents/NonExistentUserDisplayComponent';
import CriticalAlertDisplay from '../Components/UIHelperComponents/CriticalAlertDisplay';
import { SetInitialLoadingStartTime } from '../Actions/LoadedStatesActions';
import MobileNavBar from './MobileNavBar';
import MobileAppointmentsTableView from './MobileAppointmentsTableView';

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
