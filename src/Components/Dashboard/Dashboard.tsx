import Topbar from '../Topbar/Topbar';
import { Routes, Route } from 'react-router-dom';
import AppointmentsTableView from '../Appointments/AppointmentsTableView';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import OrganisationInitialModalPickerComponent from '../OrganisationPicker/OrganisationInitialModalPickerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { GetServiceProviderBasic } from '../../ServiceActions/ServiceProviderBasicActions';
import AddPatientForm from '../AddPatientAndBookAppointment/AddPatientAndBookAppointmentForm';
import { Divider } from '@mui/material';
import SetTrackTrace from '../../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import ConsultationView from '../Consultation/ConsultationView';
import PatientsTabMainView from '../PatientsList/PatientsTabMainView';
import Calendar from '../CalendarPicker/Calendar';
import FullPageLoadingDisplay from '../UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../UIHelperComponents/NonExistentUserDisplayComponent';
import CriticalAlertDisplay from '../UIHelperComponents/CriticalAlertDisplay';
import { SetInitialLoadingStartTime } from '../../Actions/LoadedStatesActions';
import { clearAuthToken } from '../../Auth/FirebaseUserInfoHelper';
import MobileDashboard from '../../mobile/MobileDashboard';

function Dashboard() {
    const dispatch = useDispatch();
    const serviceProviderBasicState = useSelector(
        (state: RootState) => state.ServiceProviderBasicState,
    );
    
    const isViewingImage = useSelector(
        (state: RootState) => state.UITriggerState.isViewingImage,
    );

    //SINCE THIS IS VERY FIRST COMPONENT LOAD. THIS IS INITIAL TRIGGER POINT
    useEffect(() => {
        console.log('hello init');
        SetTrackTrace(
            'Dashboard Mounted',
            'Dashboard',
            SeverityLevel.Information,
        );
        clearAuthToken();
        dispatch(SetInitialLoadingStartTime());
        dispatch(GetServiceProviderBasic());
    }, []);
    //END

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
                            <h5 style={{ marginBottom: 20 }}> Appointments </h5>
                            <AppointmentsTableView />
                        </Col>
                        <Col md="3">
                            <Row>
                                <AddPatientForm></AddPatientForm>
                            </Row>
                            <Row>
                                <Divider style={{ marginBottom: 20 }}></Divider>
                            </Row>
                            <Row>
                                <Calendar />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    function PatientsView() {
        return (
            <div style={{ margin: 20 }}>
                <Container fluid>
                    <PatientsTabMainView />
                </Container>
            </div>
        );
    }

    function MainDashboardView() {
        return (
            <div>
                {!isViewingImage && <Topbar />}
                <div style={{ marginTop: 110 }}>
                    <Routes>
                        <Route
                            path="/Appointments"
                            element={AppointmentsAndCalendarView()}
                        />
                        <Route
                            path="/*"
                            element={AppointmentsAndCalendarView()}
                        />
                        <Route path="/Patients" element={PatientsView()} />
                        <Route
                            path="/Consultation/:id"
                            element={<ConsultationView></ConsultationView>}
                        />
                    </Routes> 
                </div>
            </div>
        );
    }

    //MAIN RENDER FUNCTION
    return (
        <>
            <div>
                {serviceProviderBasicState.serviceProvider ? (
                    MainDashboardView()
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

export default Dashboard;
